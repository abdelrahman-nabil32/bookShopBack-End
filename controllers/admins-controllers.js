const AdminModel = require("../models/Admin-model");
const validator = require('validator');


const addNewAdmin = async(req, res) =>{
    let {username,email,password} = req.body;
    if((!username)||(!email)||(!password)){
        res.status(400).json({status: 'FAIL' , message: 'username, email and password are required'})
    }else if(!validator.isEmail(email)){
        res.status(400).json({status: 'FAIL' , message: 'email must be in the construction of emails'})
    }else if(/\s/.test(username)){
        res.status(400).json({status: 'FAIL' , message: "Username should not contain spaces" });
    }else if(/\s/.test(password)){
        res.status(400).json({status: 'FAIL' , message: "password should not contain spaces" });
    }else{
        username = username.trim();
        email = email.trim();
        password = password.trim();
        let newAdmin = new AdminModel({username: username, email: email, password: password});
        try{
        await newAdmin.save();
        res.status(201).json({status: 'SUCCESS', message: 'the new Admin was created successfully'})
        }catch(error){
            res.status(400).json({status: 'ERROR', message: error.message});
        }
    }
}

const getAllAdmins = async(req, res) =>{
try{
    const allAdmins = await AdminModel.find({},{"__v":false,"password":false});
    if(allAdmins){
    res.status(200).json({status:"SUCCESS", data:allAdmins});
    }else{
    res.status(404).json({status:"FAIL", message:"there are no admins"});
    }
}catch(error){
    res.status(400).json({status:"ERROR", message:error.message})
}
}
const getSpecificAdmin = async(req,res)=>{
    try{
        let adminID = req.params.adminID;
        adminID = adminID.trim();
        const wantedAdmin = await AdminModel.find({_id:adminID},{"__v":false,"password":false});
        if(wantedAdmin){
            res.status(200).json({status:"SUCCESS", data:wantedAdmin});
        }else{
            res.status(404).json({status:"FAIL", message:"this admin does not exist"});
        }
    }catch(error){
        res.status(400).json({status:"ERROR", message:error.message})
    }
}
const updateAdmin = async(req,res) =>{
    let wantedAdminID = req.params.adminID;
    wantedAdminID = wantedAdminID.trim();
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
        const dbUpdateAdmin = await AdminModel.findByIdAndUpdate(wantedAdminID,clientUpdates,{
            new:true,
            runValidators:true,
        });

        if(dbUpdateAdmin){
            res.status(202).json({status:"SUCCESS", message:"admin was updated successfully"});
        }else{
            res.status(404).json({status:"FAIL", message:"this admin does not exist"});
        }
    }catch(error){
        res.status(400).json({status:"ERROR", message:error.message})
    }
}
const deleteAdmin = async(req,res) =>{
    let wantedAdminID = req.params.adminID;
    wantedAdminID = wantedAdminID.trim();
    try{
        const deletedAdmin = await AdminModel.findByIdAndDelete(wantedAdminID);
        if(deletedAdmin){
            res.status(202).json({status:"SUCCESS", message:"admin was deleted successfully"});
        }else{
            res.status(404).json({status:"FAIL", message:"this admin already does not exist"});
        }
    }catch(error){
        res.status(400).json({status:"ERROR", message:error.message})
    }
}

module.exports = {
    addNewAdmin,
    getAllAdmins,
    getSpecificAdmin,
    updateAdmin,
    deleteAdmin
};
