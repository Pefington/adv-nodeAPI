import express from 'express';
import { router as feedRoutes } from './routes/feed.js';

const app = express();

app.use('/feed', feedRoutes);

try {
  app.listen(3000);
} catch (error) {
  console.error(error);
}
