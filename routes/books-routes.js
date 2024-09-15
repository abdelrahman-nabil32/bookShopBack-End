const express = require('express');
const booksController = require('../controllers/books-controllers');
const sessionController = require("../controllers/sessionManagement-controller")
const bookRouter = express.Router();

bookRouter.get("/categories",sessionController.accessTokenValidation,booksController.getCategories);

module.exports = bookRouter