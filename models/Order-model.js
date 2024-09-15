const validator = require('validator');
const mongoose = require('mongoose');
const OrderSchema = mongoose.Schema({
"creationDate":
{
    type: Date,
    default: Date.now
},
"customerID":
{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true
},
"sellerID":
{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true
},
"totalPaidAmount":
{
    type: Number,   
    require: true,
},
"orderedBooks":
[
    {
        "bookID":{type: mongoose.Schema.Types.ObjectId , ref:"Book",required: true}, 
        "orderedCopiesNumber":{type: Number, required:true,default:1},
    }
]
});

let OrderModel = mongoose.model('Order',OrderSchema);
module.exports = OrderModel;