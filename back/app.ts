import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const PORT: number | string = process.env.PORT || 4000;

const app: express.Application = express();

/* cors */
const corsOptionsDev: cors.CorsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

if (process.env.NODE_ENV === 'development') {
  app.use(cors(corsOptionsDev));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('maple_cube API');
});

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get(
      'https://public.api.nexon.com/openapi/maplestory/v1/cube-use-results',
      {
        params: req.query,
        withCredentials: true,
        headers: {
          Authorization: req.query.key as string,
        },
      }
    );

    if (response.status !== 200) {
      // 중단하고 에러 응답을 보냅니다.
      return res.status(400).json({
        message: 'Bad Request',
        status: 400,
      });
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

/* start */
app.listen(PORT, () => {
  console.log(`해당 포트는 ${PORT}에서 작동중 입니다.`);
});
