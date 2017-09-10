class Subject {
  method() {
    throw new Error('This is an abstract class')
  }
}

class RealSubject extends Subject {
  method() {
    console.log('Real request')
  }
}

class Proxy extends Subject {
  constructor(realSubject) {
    super()
    this.realSubject = realSubject
  }

  method() {
    this.realSubject.method()
  }
}


module.exports = {
  RealSubject,
  Proxy
}