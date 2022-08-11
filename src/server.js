require('./db/connection');
const cors = require('cors');
const express = require('express');
const userRouter = require('./user/routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);








app.listen(5000, ()=>{console.log('Listening to port 5000');});