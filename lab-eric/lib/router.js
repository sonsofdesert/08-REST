'use strict';

const express = require('express');
const Router = express.Router();
const storage = require('../lib/storage.js');

Router.get('/cats', (request, response) => {
  let name = request.query.name;
  if(name === '') {
    response.status = 400;
    response.statusMessage = 'Bad Request';
    response.send(400);
  }
  if(name) {
    
    let oneCat = storage.getCat(name);
    if(oneCat === undefined) {
      response.statusCode = 404;
      response.statusMessage = `Does not exist ${name}`;
      response.send(404);
    } else {
      response.statusCode = 200;
      response.statusMessage = `Retrieved ${JSON.stringify(oneCat)}`;
      response.send(oneCat);
    }
  } else {
    let currentShelter = storage.getAll();
    response.send(currentShelter);
  };
});

Router.post('/cats', (request, response) => {
  let body = request.body;
  if(body.name !== undefined && body.age !== undefined && body.breed !== undefined) {
    let catObj = storage.createCat(body.name, body.age, body.breed);
    catObj.describe();
    response.statusCode = 200;
    response.statusMessage = `POST body ${JSON.stringify(body)}`;
    response.send(catObj);
    response.end();
  } else {
    response.statusCode = 400;
    response.statusMessage = 'Invalid body';
    response.end();
  };
});

Router.delete('/cats', (request, response) => {
  let name = request.query.name;
  if(name) {
    storage.removeCat(name);
  };
  let currentShelter = storage.getAll();
  response.send(currentShelter);
});

module.exports = Router;