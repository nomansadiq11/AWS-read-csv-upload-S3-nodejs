
var express = require('express');
var router = express.Router();
var util = require("util");
var fs = require("fs");
var multer = require('multer');
var csvjson = require('csvjson'); 
const readFile = require('fs').readFile;

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




router.get('/',function(req,res) {
        res.render("uploadPage", {title: "I love files!"});
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
        readFile(req.file.path, 'utf-8', (err, filecontent)=> {
            if(err)
            {
                console.log(err); 
                throw new Error(err); 
            }
            else
            {
                const jsonobj = csvjson.toObject(filecontent); 
                console.log(jsonobj); 
            }
        }); 

        res.redirect("/uploads")


        // res.send(file)


    }
        
    
    }); 

  


// router.post("/upload", upload.single('myFile'), function(req,res,next) {
//     console.log("rece request");
//     if(req.file === undefined)
//     {
//         console.log("request files are undefined"); 
//     }
//     else
//     {
//         res.end("Got your file!");
//         console.log("it has file"); 
//     }

//     // console.log(req.file);
//     // // console.log(res);
//     // // console.log(next);
//     // debugger; 
//     //     if (req.file) {
//     //         console.log("has file");
//     //         console.log(util.inspect(req.file));
//     //         // if (req.file.myFile.size === 0) {
//     //         //     returnnext(newError("Hey, first would you select a file?"));
//     //         // }
//     //         fs.exists(req.file.myFile.path,function(exists) {
//     //             console.log("file exists");
//     //                 if (exists) {
//     //                     res.end("Got your file!");
//     //                 } else {
//     //                     res.end("Well, there is no magic for those who don’t believe in it!");
//     //                 }
//     //             });
//     //     }
//     });


module.exports = router;