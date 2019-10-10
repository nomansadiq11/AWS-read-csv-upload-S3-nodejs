var csvjson = require('csvjson'); 
const readFile = require('fs').readFile;


readFile('./../uploads/all preorder 09102019.csv', 'utf-8', (err, filecontent)=> {
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