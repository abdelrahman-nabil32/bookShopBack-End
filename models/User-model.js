const validator = require('validator');
const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
"fullName":
{
    type: String,
    require: true,
},
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
"phoneNumber":
{
    type: String,   
    require: true,
    unique: true,
},
"address":
{
    type: String,   
    require: true,
},
"role":
{
type: String, 
require: true
},
"refreshToken":
{
    type: String
}
});

let UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;