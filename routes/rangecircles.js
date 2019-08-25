const express= require('express');
const router= express.Router();
const MaapModel = require(__dirname+'../../models/Rangecircle')
router.get('/', function(req, res, next) {
    MaapModel.find({},function(error,datavalue){
        if (error){throw error} 
        //res.render('\home',{data:datavalue});
        res.json(datavalue);
    })
 })
 module.exports= router;