var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VarianceModel = new Schema({
    name: String,
    var001: Number
},{
    collection: 'samples2'
});

module.exports = mongoose.model('VarianceModel', VarianceModel);