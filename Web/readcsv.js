


const fs = require('fs');

try {
    // read contents of the file
    const data = fs.readFileSync('./uploads/soh.csv', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach((line) => {
        console.log(line);
    });
} catch (err) {
    console.error(err);
}


// const lineReader = require('line-reader');


// var data = []


// var eachLine = function(filename, options, iteratee) {
//     return new Promise(function(resolve, reject) {
//       lineReader.eachLine(filename, options, iteratee, function(err) {
//         if (err) {
//           reject(err);
//         } else {
//             console.log("resolver"); 
//           resolve();
//         }
//       });
//     });
//   }

//   eachLine('./uploads/soh.csv', function(line) {
//     console.log("asdfa" + line);
//   }).then(function() {
//     console.log('done');
//   }).catch(function(err) {
//     console.error(err);
//   });



// lineReader.eachLine("./uploads/soh.csv", function(line) {
//     data.push(line); 
//     console.log(line);
    
// });


// console.log(data); 


// var fs = require("fs");

// fs.readFile("./uploads/soh.csv", function(err, buf) {
//   console.log(buf.toString());
// });



// var fs = require("fs");

// var data = "New File Contents";

// fs.writeFile("./uploads/soh.csv", data, (err) => {
//   if (err) console.log(err);
//   console.log("Successfully Written to File.");
// });



// const csv=require('csvtojson')
// csv({
// 	noheader:true,
// 	output: "csv"
// })
// .fromFile("./uploads/soh.csv")
// .then((csvRow)=>{ 
// 	console.log(csvRow) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
// })