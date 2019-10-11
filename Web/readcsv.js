


const lineReader = require('line-reader');


var data = []

lineReader.eachLine("./uploads/soh.csv", function(line) {
    data.push(line); 
    console.log(line);
    
});


console.log(data); 


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