import { dbConnect } from "./config/db.js";
import pkg from 'express';
const express = pkg;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded()); 

//main routes
import { userRouter } from './routes/userRoutes.js';
app.use('/',userRouter);

//home page
app.get('/',(req,res) =>{
    res.send('Welcome User');
})

const port = 3000;
app.listen(port,() =>{console.log(`Server is running on http://localhost:${port}`)})

