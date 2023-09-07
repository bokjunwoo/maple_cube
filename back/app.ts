import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const PORT: number | string = process.env.PORT || 4000;

const app = express();

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

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('maple_cube API');
});

/* start */
app.listen(PORT, () => {
  console.log(`해당 포트는 ${PORT}에서 작동중 입니다.`);
});
