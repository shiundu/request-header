
var express = require('express');
var app = express()
var port = process.env.PORT || 80

app.get('/', function(req, res){
  
  var send = {
    ipaddress: req.headers['x-forwarded-for'],
    language: req.headers['accept-language'].slice(0,6),
    software: req.headers['user-agent'].slice(13,46)
  }
  
  res.send(send)
})
app.listen(port, process.env.IP || "0.0.0.0", function(){
  console.log("Header Request app");
});
