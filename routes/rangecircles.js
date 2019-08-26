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
 router.post('/', function(req,res){
    MaapModel.create(req.body).then(function(data){
        MaapModel.find({},function(error,datavalue){
            if (error){throw error} 
            //res.render('\home',{data:datavalue});
            res.json(datavalue);
        })
    })
});

router.delete('/:id', function(req,res){
   MaapModel.findByIdAndRemove({_id: req.params.id}, 
    function(data){
        MaapModel.find({},function(error,datavalue){
            if (error){throw error} 
            res.json(datavalue);
        })
   })
    
});

 module.exports= router;