const mongoose = require('mongoose');
const BookModel = require('../models/Book-model');

const getCategories = async (req, res)=>{
try{
const categories = await BookModel.distinct('category');
if(categories.length === 0){
   return res.status(404).json({status:"FAIL",message:"there are no categories"})
}else{
    return res.status(200).json({status:"SUCCESS",data:categories});
}
}catch(error){
res.status(500).json({status:"ERROR",message:error.message});
}
}

module.exports = {
    getCategories
}