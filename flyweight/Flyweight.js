class Flyweight {
  method() {
    throw new Error('This is an abstract class')
  }
}

class ConcreteFlyweight extends Flyweight {
  method(extrinsicState) {
    console.log('Concrete Flyweight: ' + extrinsicState)
  }
}

class UnsharedConcreteFlyweight extends Flyweight {
  method(extrinsicState) {
    console.log('Unshared Concrete Flyweight: ' + extrinsicState)
  }
}

class FlyweightFactory {
  constructor() {
    this.flyweights = []
    this.flyweights.push(new ConcreteFlyweight())
    this.flyweights.push(new ConcreteFlyweight())
    this.flyweights.push(new ConcreteFlyweight())
  }

  get(index){
    return this.flyweights[index]
  }
}

module.exports = { 
  FlyweightFactory,
  ConcreteFlyweight,
  UnsharedConcreteFlyweight
}