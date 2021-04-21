import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import photosRouter from './routes/photos.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/photos', photosRouter);


const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);