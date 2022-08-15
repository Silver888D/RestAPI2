require('./db/connection');
const cors = require('cors');
const express = require('express');
const userRouter = require('./user/routes');
const port = process.env.PORT || 5000;

// var bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());
// app.use(bodyParser.json({
//     limit: '50mb'
//   }));
  
//   app.use(bodyParser.urlencoded({
//     limit: '50mb',
//     parameterLimit: 100000,
//     extended: true 
//   }));

app.use(userRouter);


app.listen(port, ()=>{console.log('Listening to port 5000');});