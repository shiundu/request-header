
var express = require('express');
var app = express()
var port = process.env.PORT || 80

app.get('/', function(req, res){
  
  var software = req.headers['user-agent'];
  var lan = req.headers['accept-language'];
  var send = {
    ipaddress: req.headers['x-forwarded-for'],
    language: lan.substring(0, lan.indexOf(",") ),
    software: software.substring(software.indexOf("(")+1, software.indexOf(")") )
  }
  
  res.send(send)
})
app.listen(port, process.env.IP || "0.0.0.0", function(){
  console.log("Header Request app");
});
