var express= require('express');
var path = require('path')
//export all  from  todoController
var controller = require('./Controller/todoController.js')
var app= express();

// using ejs templetes
//app.set('view engine','ejs');
app.use(express.static(__dirname+'/Public'));
//fire controller 
controller(app)


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'));
   
  });
}
app.listen(3001);
module.exports = app;
//postmen softwre is used to test api request such as get post etc.
//npm i -g-create-react-app
//here g means globaly in my local machine adding create react app and i means install
//then using create-react-app client, we can create react app called client
//npm i-g-npm  means to update latest npm

//npm i concurrently to run both backend nodejs express and forntend react app at a same time.

// In root  package-json {"client-install":"npm install --prefix client"
// is refer to install all npm (node_module) in server while publishing the website 
//or in github while downloading app commond npm install it automatically install  all npm (node_module)   }
//{"client":"npm start --prefix client"}
// "dev":"concurrently  \"npm run Server\" \"npm run client\"" means to run both backend nodejs express and forntend react app at simultaneously
//install ES7 react from extensions for auto react component layout
// compnents doesnot  life cycle , no states but class components have  life cycle , states
//react return JXS basically its a html 
// ctrl+D to select matching value and rename all
//axios  Make XMLHttpRequests from the browser
//"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prifix client"
  //to build folder in heroku
  