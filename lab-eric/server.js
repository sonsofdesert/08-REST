'use strict';

const express = require('express');
const app = express();
const cat = require('./model/cat.js');
const PORT = process.env.PORT || 3000;

require('./lib/storage.js').seed();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routes = require('./lib/router.js');
app.use(routes);

app.use((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Testing basic response');
  response.write(cat["name"]);
  response.end();
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});