const express = require('express');
//const app = express();
const VarianceRouter = express.Router();
 

const VarianceModel = require('../models/VarianceModel');

VarianceRouter.route('/').get(function (req, res){
    var query = VarianceModel.find({});

    query.exec(function(err, allVariances){
        if (err){ console.log(err);}
        else {res.json(allVariances);}
    });
});

VarianceRouter.route('/id/:id').get(function (req, res){
    const id = req.params.id;
    var query = VarianceModel.findById(id);

    query.exec(function(err, varModel){
        res.json(varModel);
    });
});

VarianceRouter.route('/single/:varId').get(function (req, res){
    const varId = req.params.varId;

    var varNumber = parseInt(varId.substring(varId.length - 3, varId.length));
    
    if (varNumber < 201 && varNumber > 0){
        var query = VarianceModel.find({}).select({ "_id": 0, [varId]: 1});
        query.exec(function (err, allVariances) {
            if (err){ console.log(err);}
            else {res.json(allVariances);}
        });
    } else {
        res.json([]);
    }
});

VarianceRouter.route('/single/').get(function (req, res){
    var query = VarianceModel.find({}).select({ "_id": 1, "var001": 1});
    query.exec(function (err, allVariances) {
        if (err){ console.log(err);}
        else {res.json(allVariances);}
    });
});

module.exports = VarianceRouter;