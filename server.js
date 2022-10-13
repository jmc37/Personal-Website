const express = require('express')
const app = express()

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+"/index.html"))
  })