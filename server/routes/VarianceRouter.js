const express = require('express');
const app = express();
const VarianceRouter = express.Router();
 

const VarianceModel = require('../models/VarianceModel');

VarianceRouter.route('/').get(function (req, res){
    console.log("Loading all!!!");
    VarianceModel.find(function (err, allVariances){
        if (err){ console.log(err);}
        else {res.json(allVariances);}
    });
});

module.exports = VarianceRouter;