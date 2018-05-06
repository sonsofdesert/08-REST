'use strict';

const express = require('express');
const Router = express.Router();
const storage = require('../lib/storage.js');

describe('______ function', () => {
  it('should return a list [] of all cat key value pairs', (resolve, reject) => {
    let theShelter = {};
    let result = storage.getAll();
    let expected = Object.values(theShelter);
    expect(result).toBe(expected);
    resolve();
  });
});
