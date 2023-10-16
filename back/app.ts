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
  origin: 'http://localhost:3000',
  credentials: true,
};

const corsOptionsProd: cors.CorsOptions = {
  origin: [process.env.ORIGIN_URL || ''],
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
    const response = await axios.get(process.env.MAPLE_URL || '', {
      params: req.body,
      withCredentials: true,
      headers: {
        Authorization: req.body.key,
      },
    });

    if (response.status === 200 && req.body.date === req.body.lastDate) {
      await mongoClient.connect();
      const CubeDataDB = mongoClient
        .db(process.env.DB_NAME)
        .collection(process.env.DB_COLLECTION || '');
      await CubeDataDB.updateOne(
        { name: process.env.UPDATE_ONE_NAME },
        { $inc: { count: +1 } }
      );
    }

    res.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
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
