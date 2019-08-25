
const express= require('express');
var app= express();
const Route= express.Router();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const MaapModel = require(__dirname+'../../models/Rangecircle')

Route.post('/',urlencodedParser, function(req,res){

    //console.log(res.body);
    // urlencodedParser is to midware to give aceess to req.body to access the form data ;
    var MaapviewData =Maap(req.body).save(function(error, datavalue){
        if (error){throw error}  
        MaapModel.find({},function(error,datavalue){
            if (error){throw error} 
          //  res.render('\home',{data:datavalue});
          res.json(datavalue);
        })
    })
})
module.exports= Route;