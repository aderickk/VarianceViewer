var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VarianceModel = new Schema({
   
},{
    collection: 'samples'
});

module.exports = mongoose.model('VarianceModel', VarianceModel);