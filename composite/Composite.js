const { Component } = require('./Component')

class Composite extends Component {
  constructor(name) {
    super(name)
    this.components = []
  }

  add(comp) {
    this.components.push(comp)
  }

  delete(comp) {
    const index = this.components.indexOf(comp)
    this.components.splice(index, 1)
  }

  display(depth) {
    console.log('_ '.repeat(depth) + this.name)
    for (let comp of this.components) {
      comp.display(depth + 2)
    }
  }
}


module.exports = { Composite }