const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');
const config = require('./database/DB');
const VarianceRouter = require('./routes/VarianceRouter');

mongoose.connect(config.DB).then(
    () => {console.log('Database connected')},
    err => {console.log('Failed to connect to database. ' + err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/variances', VarianceRouter);

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});