//assuming app is express Object.
const express = require('express');
const app = express();
const path = require('path');
app.get('/',function(req,res) {
  res.sendFile(path.join(`${__dirname}/index2.html`));
});

app.listen(process.env.port || 3000);

