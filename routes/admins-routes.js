const express = require('express');
const adminController = require('../controllers/admins-controllers');
const sessionController = require('../controllers/sessionManagement-controller');
const adminRouter = express.Router();

adminRouter.post("/add",sessionController.accessTokenValidation,adminController.addNewAdmin);
adminRouter.get("/showAll",adminController.getAllAdmins);
adminRouter.get("/show/:adminID",adminController.getSpecificAdmin);
adminRouter.patch("/update/:adminID",adminController.updateAdmin);
adminRouter.delete("/delete/:adminID",adminController.deleteAdmin);

module.exports = adminRouter;