
var express = require('express');
var router = express.Router();
var util = require("util");
var fs = require("fs");
var multer = require('multer');

const readFile = require('fs').readFile;

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



var filedata = []



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
        console.log("file path" + req.file.path); 


        lineReader.eachLine(req.file.path, function(line, IsLastLine) {

            
            console.log(line); 
            data.push(line); 

            if(IsLastLine)
            {
                res.render("uploadedfile", {result:  data});
            }

            
        });


    }
        
    
    }); 

  

module.exports = router;