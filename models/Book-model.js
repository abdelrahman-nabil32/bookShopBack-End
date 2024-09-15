const validator = require('validator');
const mongoose = require('mongoose');
const BookSchema = mongoose.Schema({
"title":
{
    type: String,
    require: true,
},
"description":
{
    type: String,
    require: true,
},
"imageURL":
{
    type: String,   
    require: true,
},
"price":
{
    type: Number,   
    require: true,
},
"author":
{
    type: String,   
    require: true,
},
"numberOfCopies":
{
    type: Number,   
    require: true,
},
"category":
{
type: String, 
require: true
},
"soldsNumber":
{
type: Number, 
require: true,
default: 0,
},
"sellerInfo":
{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
}
});

let BookModel = mongoose.model('Book',BookSchema);
module.exports = BookModel;