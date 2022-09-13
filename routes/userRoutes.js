import pkg from 'express';
const express = pkg;

import { allRecord,insertRecord,updateRecord,deleteRecord} from '../controller/userController.js'
export const userRouter = express.Router();


userRouter.get('/records',allRecord);
userRouter.post('/insert',insertRecord);
userRouter.post('/update',updateRecord);
userRouter.post('/delete',deleteRecord);