
const express = require('express');
const app = express();
var session = require('express-session');
const path = require(`path`);
const bodyParser = require('body-parser');
app.enable('trust proxy');



app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/', require('./routes/index.js'));

// Listen to the environment-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});