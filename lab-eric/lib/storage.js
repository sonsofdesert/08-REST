'use strict';

const Cat = require('../model/cat.js');

let theShelter = {};

const seed = () => {
  
  const larry = new Cat('larry', 6, 'Aegean');
  const curly = new Cat('curly', 11, 'American Shorthair');
  const moe = new Cat('moe', 3, 'Birman');

  theShelter[larry.name] = larry;
  theShelter[curly.name] = curly;
  theShelter[moe.name] = moe;
};

const getAll = () => {
  return Object.values(theShelter);
};

const getCat = (name) => {
  if (!name in theShelter) {
    return undefined;
  };
  return theShelter[name];
};

const createCat = (name, age, breed) => {
  const someCat = new Cat(name, age, breed);
  theShelter[someCat.name] = someCat;
  return someCat;
};

const removeCat = (name) => {
  delete theShelter[name];
};

module.exports = {seed, getCat, getAll, createCat, removeCat};
