class Component {
  constructor(name) {
    this.name = name
  }

  add() {
    throw new Error('This is an abstract class')
  }

  delete() {
    throw new Error('This is an abstract class')
  }

  display() {
    throw new Error('This is an abstract class')
  }
}


module.exports = { Component }
