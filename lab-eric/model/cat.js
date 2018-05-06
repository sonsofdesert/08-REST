'use strict';

class Cat {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  };
  describe(){
    const catInfo = `Name= ${this.name}, Age= ${this.age}, Breed= ${this.breed}`;
  };
};

module.exports = Cat;