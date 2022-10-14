const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname)));

app.listen(process.env.PORT || 2000, function (err) {
    if (err)
        console.log(err);
})
