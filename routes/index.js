var express = require('express');
var router = express.Router();
console.log("Started");
router.get('/',function(req,res,next){
    console.log("Inside");
    res.render('index.html');
    console.log("Entered index.html");
});

module.exports = router;