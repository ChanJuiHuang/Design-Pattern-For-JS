class Subject {
  constructor() {
    this.observers = []
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  notify() {
    for (let observer of this.observers) {
      observer.update()
    }
  }
}

class ConcreteSubject extends Subject{
  constructor(state = 'off') {
    super()
    this.state = state
  }
}


module.exports = {
  ConcreteSubject
}