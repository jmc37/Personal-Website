const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || '5000'
app.set("port", PORT);

app.get('/', function(req, res, next){
    res.sendStatus(200);
});

app.get('/index.html', function(req, res, next){
    res.sendFile(path.join(__dirname+"/index.html"));
});
