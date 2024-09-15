const express = require('express');
const userController = require('../controllers/user-controller');
const sessionManagementController = require('../controllers/sessionManagement-controller');
const userRouter = express.Router();

userRouter.post("/add",userController.addNewUser);
userRouter.get("/showAll",userController.getAllUsers);
userRouter.get("/show/:userID",userController.getSpecificUser);
userRouter.patch("/update/:userID",userController.updateUser);
userRouter.delete("/delete/:userID",userController.deleteUser);
///updates 
userRouter.post("/seller/add/book",sessionManagementController.accessTokenValidation,userController.addNewBookBySeller);
//=====================================
module.exports = userRouter;