import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import mongoClient from './mongo';
dotenv.config();

const PORT = process.env.PORT;

const app = express();

/* cors */
const corsOptionsDev: cors.CorsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

const corsOptionsProd = {
  origin: ['https://cubedata.live'],
  credentials: true,
};

if (process.env.NODE_ENV === 'development') {
  app.use(cors(corsOptionsDev));
}

if (process.env.NODE_ENV === 'production') {
  app.use(cors(corsOptionsProd));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('maple_cube API');
});

app.post('/api/data', async (req, res) => {
  try {
    const response = await axios.get(
      'https://public.api.nexon.com/openapi/maplestory/v1/cube-use-results',
      {
        params: req.body,
        withCredentials: true,
        headers: {
          Authorization: req.body.key,
        },
      }
    );

    if (response.status === 200 && req.body.date === req.body.lastDate) {
      await mongoClient.connect();
      const CubeDataDB = mongoClient.db('CubeData').collection('Count');
      await CubeDataDB.updateOne(
        { name: 'CubeDataRequestCount' },
        { $inc: { count: +1 } }
      );
    }

    res.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // 에러 형식을 명시적으로 체크하고 사용자 정의 처리 가능
      console.error('Error:', error);
      res.status(error.response?.status as number).json(error.response?.status);
    } else {
      console.error('Error:', error);
      res.status(500).json(500);
    }
  }
});

/* start */
app.listen(PORT, () => {
  console.log(`해당 포트는 ${PORT}에서 작동중 입니다.`);
});
