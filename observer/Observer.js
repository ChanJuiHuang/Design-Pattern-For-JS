class Observer {
  constructor(subject) {
    this.subject = subject
  }

  update() {
    throw new Error('This is an abstract class')
  }
}

class ConcreteObserver extends Observer {
  constructor(subject) {
    super(subject)
  }

  update() {
    console.log('Update status!')
  }
}


module.exports = { ConcreteObserver }