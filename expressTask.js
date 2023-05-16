var express = require("express");
var fs = require("fs");

//create app object / instance
var app = express();

var portNo = 8080;

app.get("/getUser", function (req, res) {
  fs.readFile("UserJson.json", function (err, result) {
    if (err) {
      throw err;
    } else {
      res.send(JSON.parse(result));
    }
  });
});

app.listen(portNo, function (err) {
  console.log("server runs on port:", portNo);
});
