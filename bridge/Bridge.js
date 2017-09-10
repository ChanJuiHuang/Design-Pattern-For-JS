class Implementor {
  method() {
    throw new Error('This is an abstract class')
  }
}

class ConcreteImplementor1 extends Implementor {
  method() {
    console.log('Implementor1')
  }
}

class ConcreteImplementor2 extends Implementor {
  method() {
    console.log('Implementor2')
  }
}

class Abstraction {
  constructor(implementor) {
    this.implementor = implementor
  }

  method() {
    throw new Error('This is an abstract class')
  }
}

class RefinedAbstraction extends Abstraction {
  constructor(implementor) {
    super(implementor)
  }

  setImplementor(implementor) {
    this.implementor = implementor
  }

  method() {
    this.implementor.method()
  }
}

module.exports = {
  RefinedAbstraction,
  ConcreteImplementor1,
  ConcreteImplementor2
}