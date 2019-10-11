
var express = require('express');
var router = express.Router();
var util = require("util");
var fs = require("fs");
var multer = require('multer');
var csvjson = require('csvjson'); 
const readFile = require('fs').readFile;
var csv = require('node-csv'); 
const lineReader = require('line-reader');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});


var upload = multer({ storage: storage })


// app.use(multer({
//     dest:"./uploads/"
//   }).single());


var data = []



router.get('/',function(req,res) {
        res.render("uploadPage", {title: "Csv Reader"});
    });


router.post('/upload', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    else
    {
        data = []; 
        lineReader.eachLine(req.file.path, function(line) {
            data.push(line); 
        });

        res.render("uploadedfile", {result:  data});

    }
        
    
    }); 

  

module.exports = router;