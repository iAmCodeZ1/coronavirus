const express = require('express');
const path = require('path');
const app = express();

const virus = require('./server/virus');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist/blk-design-system-angular')));

app.use('/virus', virus);

app.listen(port, () => console.log("Server running in port: " + port));