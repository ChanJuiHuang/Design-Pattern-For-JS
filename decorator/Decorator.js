class Component {
  display() {
    throw new Error('This is an abstract class')
  }
}

class ConcreteComponent extends Component {
  constructor(name) {
    super()
    this.name = name
  }

  display() {
    console.log(this.name)
  }
}

class Decorator extends Component {
  constructor(name) {
    super()
    this.name = name
    this.component = null
  }

  decorate(comp) {
    throw new Error('This is an abstract class')
  }
}

class ConcreteDecorator extends Decorator {
  constructor(name) {
    super(name)
  }

  decorate(comp) {
    this.component = comp
  }

  display() {
    console.log(this.name)
    this.component.display()
  }
}


module.exports = { 
  ConcreteComponent,
  ConcreteDecorator
}
