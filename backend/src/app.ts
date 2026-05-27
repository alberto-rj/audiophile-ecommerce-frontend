import express from 'express';
import cookieParser from 'cookie-parser';

import { env } from '@/config/env';

const { PORT, NODE_ENV } = env;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_, res) => {
  res.status(200).json({
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });

  console.log(`Swagger UI is available at http://localhost:/api-docs`);
}
