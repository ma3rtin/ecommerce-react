import express from 'express';
import usersRouter from './routes/users.router.js';
import businessRouter from './routes/business.router.js';
import ordersRouter from './routes/orders.router.js';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config/config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const connection = mongoose.connect(`${config.mongoUrl}`)

app.use(cors({origin:`${config.origin}`, methods:['GET', 'POST', 'PUT']}));

app.use('/api/users',usersRouter);
app.use('/api/business',businessRouter);
app.use('/api/orders',ordersRouter);

app.listen(config.port, () => console.log('Server is running!'));
