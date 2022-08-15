require('./db/connection');
const cors = require('cors');
const express = require('express');
const userRouter = require('./user/routes');
var bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({
    limit: '50mb'
  }));
  
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 300000,
    extended: true 
  }));
  app.use(express.json());
app.use(userRouter);


app.listen(5000, ()=>{console.log('Listening to port 5000');});