const UserModel = require("../models/User-model");
const BookModel = require("../models/Book-model");
const validator = require('validator');


const addNewUser = async(req, res) =>{
    let {username,email,password,phoneNumber,address,serviceType} = req.body;
    if((!username)||(!email)||(!password)||(!phoneNumber)||(!address)||(!serviceType)){
        res.status(400).json({status: 'FAIL' , message: 'username, email, password , phoneNumber , address and serviceType are required'});
    }else if(!validator.isEmail(email)){
        res.status(400).json({status: 'FAIL' , message: 'email must be in the construction of emails'})
    }else if(/\s/.test(username)){
        res.status(400).json({status: 'FAIL' , message: "Username should not contain spaces" });
    }else if(/\s/.test(password)){
        res.status(400).json({status: 'FAIL' , message: "password should not contain spaces" });
    }else{
        try{
            username = username.trim();
            email = email.trim();
            password = password.trim();
            phoneNumber = phoneNumber.trim();
            address = address.trim();
            let newUserModel = new UserModel({username,email,password,phoneNumber,address,serviceType});
        await newUserModel.save();
        res.status(201).json({status: 'SUCCESS', message: 'the new User Account was created successfully'})
        }catch(error){
            res.status(400).json({status: 'ERROR', message: error.message});
        }
    }
}

const getAllUsers = async(req, res) =>{
try{
    const allUsers = await UserModel.find({},{"__v":false,"password":false});
    if(allUsers){
    res.status(200).json({status:"SUCCESS", data:allUsers});
    }else{
    res.status(404).json({status:"FAIL", message:"there are no Users"});
    }
}catch(error){
    res.status(400).json({status:"ERROR", message:error.message})
}
}
const getSpecificUser = async(req,res)=>{
    try{
        let userID = req.params.userID;
        userID = userID.trim();
        const wantedUser = await UserModel.find({_id:userID},{"__v":false,"password":false});
        if(wantedUser){
            res.status(200).json({status:"SUCCESS", data:wantedUser});
        }else{
            res.status(404).json({status:"FAIL", message:"this User does not exist"});
        }
    }catch(error){
        res.status(400).json({status:"ERROR", message:error.message})
    }
}
const updateUser = async(req,res) =>{
    let wantedUserID = req.params.userID;
    wantedUserID = wantedUserID.trim();
    let clientUpdates = req.body;    
    if(!clientUpdates || Object.keys(clientUpdates).length === 0){
        res.status(400).json({status:"ERROR", message:"there are not updates entered"});
        return;
    }
    if(clientUpdates["username"] && /\s/.test(clientUpdates["username"])){
        res.status(400).json({status: 'FAIL' , message: "Username should not contain spaces" });
        return;
    }
    if(clientUpdates["password"] && /\s/.test(clientUpdates["password"])){
        res.status(400).json({status: 'FAIL' , message: "password should not contain spaces" });
        return;
    }
    try{
        const dbUpdateUser = await UserModel.findByIdAndUpdate(wantedUserID,clientUpdates,{
            new:true,
            runValidators:true,
        });

        if(dbUpdateUser){
            res.status(202).json({status:"SUCCESS", message:"User was updated successfully"});
        }else{
            res.status(404).json({status:"FAIL", message:"this User does not exist"});
        }
    }catch(error){
        res.status(400).json({status:"ERROR", message:error.message})
    }
}
const deleteUser = async(req,res) =>{
    let wantedUserID = req.params.userID;
    wantedUserID = wantedUserID.trim();
    try{
        const deletedUser = await UserModel.findByIdAndDelete(wantedUserID);
        if(deletedUser){
            res.status(202).json({status:"SUCCESS", message:"User was deleted successfully"});
        }else{
            res.status(404).json({status:"FAIL", message:"this User already does not exist"});
        }
    }catch(error){
        res.status(400).json({status:"ERROR", message:error.message})
    }
}
// new updated functions 
const addNewBookBySeller = async(req,res)=>{
    let {title,description,imageURL,price,author,numberOfCopies,category} = req.body;
    if((!title)||(!description)||(!imageURL)||(!price)||(!author)||(!numberOfCopies)||(!category)){
        return res.status(400).json({status:"FAIL",message:"title, description , imageURL , price , author , number of book copies and category shouldn't be empty"});
    }
    if(req.user.role !== "seller"){
        return res.status(400).json({status:"FAIL",message:"not allowed"});
    }
    if(Number.isNaN(numberOfCopies/2) || Number.isNaN(price/2)){
        return res.status(400).json({status:"FAIL",message:"number of copies and price fields must be a Number"});
    }
    price = Number.parseFloat(price);
    numberOfCopies = Number.parseInt(numberOfCopies);

    try {
        let checkedBook = await BookModel.findOne({
            "title":title,
            "imageURL":imageURL,
            "price":price,
            "category":category,
            "sellerInfo":req.user["_id"]
        });
        if(checkedBook){
            //merge
            checkedBook.numberOfCopies += numberOfCopies;
            await checkedBook.save();
        }else{
            //add new one
            let newBook = new BookModel({
                "title":title,
                "description":description,
                "imageURL":imageURL,
                "price":price,
                "author":author,
                "numberOfCopies":numberOfCopies,
                "category":category,
                "soldsNumber":0,
                "sellerInfo":req.user["_id"],
            });
            await newBook.save();
        }
        res.status(201).json({status:"SUCCESS",message:"Book Adding Successfully"});
    } catch (error) {
        return res.status(500).json({status:"ERROR",message:error.message});
    }
}


//------------------------

module.exports = {
    addNewUser,
    getAllUsers,
    getSpecificUser,
    updateUser,
    deleteUser,
    addNewBookBySeller
};
