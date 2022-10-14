const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || '5000'
app.set("port", PORT);
