//using app.js 
module.exports = function (app) {
    var mongoose = require('mongoose');
    var bodyParser = require('body-parser')
    app.use(bodyParser.json());
    const getdata = require(__dirname + '../../routes/rangecircles.js');

    const config = require(__dirname + '../../Public/config.js').connectionstring;

    mongoose.connect(config)
        .then(() => console.log('database Connected')).catch(error => console.log(error));

    app.use('/rangecircles', getdata);

}