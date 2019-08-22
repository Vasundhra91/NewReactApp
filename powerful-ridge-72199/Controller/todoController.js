//using app.js 
module.exports= function(app){
    var mongoose= require('mongoose');

const getdata =require(__dirname+'../../routes/rangecircles.js');
const Postdata =require(__dirname+'../../routes/postRequests.js');
const config =require(__dirname+'../../Public/config.js').connectionstring;

mongoose.connect(config)
.then(()=> console.log('database Connected')).catch(error=> console.log(error));

 app.use('/rangecircles',getdata);

 app.use('/postRequests',Postdata);


app.delete('/', function(req,res){
    res.render('\home');
})
}