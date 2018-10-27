var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VarianceModel = new Schema({
    //var001: Number,
    //var200: Number
},{
    collection: 'samples'
});

module.exports = mongoose.model('VarianceModel', VarianceModel);