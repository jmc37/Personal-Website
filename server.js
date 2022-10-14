const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname)));

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

app.get('/', function(req, res, next){
    res.sendStatus(200);
});