const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express();


app.get("/", (req,res) =>{
var date = new Date();
var currentTime = date.getTime().toString();
var dateAndTime = `${date.getDate()}-${(date.getMonth())}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;
var file = (`${dateAndTime}${".txt"}`);
  fs.writeFile(`./files/${file}`, currentTime, function (err){
    if(err) throw err;
    console.log("file created")
    res.sendFile(process.argv[2])
})
})

app.get("/", (req,res) =>{
    fs.readdir("./files", function(err, files) {
        if(err) throw err;
        res.json(files)
    })
})

app.listen(3000)
