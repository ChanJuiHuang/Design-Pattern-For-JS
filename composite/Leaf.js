const { Component } = require('./Component')

class Leaf extends Component {
  constructor(name) {
    super(name)
  }

  add() {
    console.log('Leaf doesn\'t have add method!')
  }

  delete() {
    console.log('Leaf doesn\'t have delete method!')
  }

  display(depth) {
    console.log('_ '.repeat(depth) + this.name)
  }
}


module.exports = { Leaf }