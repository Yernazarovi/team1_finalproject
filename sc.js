const express = require('express');
const path = require("path");
const app = express();


// __dirname is path of currently executing file(sc.js)
// contentType format of file
// status 200 = successfull response
/*
req is an object containing information about the HTTP request that raised the event. In response to req, you use res to send back the desired HTTP response.
*/

app.get("/" , (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get("/style.css", (req, res) => {
    res.contentType("text/css");
    res.sendFile(__dirname + "/style.css");
})

app.get("/script.js", (req, res) => {
    res.contentType("script/js");
    res.sendFile(__dirname + "/script.js");
})

app.get("/about", (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "/about.html"));
})


app.get("/about/team_photo" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/team_photo.jpeg"));
})

app.get("/video" , (req, res) => {
    res.status(200);
    res.contentType("video/mp4");
    res.sendFile(path.join(__dirname, "/video.mp4"));
    
})
.listen(3000);
console.log('The server running on 3000');