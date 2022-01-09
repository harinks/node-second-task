const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express();


app.get("/", (req,res) =>{
var date = new Date();
var currentTime = date.getTime();
var timestamp = currentTime.toString();
var dateAndTime = `${date.getDate()}-${(date.getMonth())}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;
var finalTime = (`${dateAndTime} ${".txt"}`);
  fs.writeFile(finalTime, timestamp, function (err){
    if(err) throw err;
    console.log("file created")
    res.sendFile(process.argv[2])
})
})


app.get("/", (req,res) =>{
    fs.readdir(process.argv[2], function(err, files) {
        if(err) throw err;
        res.json(files)
        console.log(files)
    })
})

app.listen(3000)