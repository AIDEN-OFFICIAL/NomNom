import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { errorMiddleware } from './interfaces/middlewares/errorMiddleware';

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('App is running fine')
})

app.use(errorMiddleware)
export default app;
