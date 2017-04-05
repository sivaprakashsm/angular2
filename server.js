var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

var port = process.env.PORT || 8080;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.engine('html',require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));


app.use('/',index);

//app.set('port', (process.env.PORT || 8080));


app.listen(port,function(){
    console.log('Server started at port '+port);
});
