const validator = require('validator');
const mongoose = require('mongoose');
const AdminSchema = mongoose.Schema({
"username":
{
    type: String,
    require: true,
    unique: true,
},
"email":
{
    type: String,
    require: true,
    unique: true,
    validate:[validator.isEmail, "email field must be valid which follows the construction of emails"],
},
"password":
{
    type: String,   
    require: true,
    unique: true,
},
"refreshToken":
{
    type: String,   
}
});

let AdminModel = mongoose.model('Admin',AdminSchema);
module.exports = AdminModel;