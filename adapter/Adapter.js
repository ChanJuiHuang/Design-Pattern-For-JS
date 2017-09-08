class Adapter {
  constructor(adaptee) {
    this.adaptee = adaptee
  }
  request() {
    this.adaptee.request()
  }
}

module.exports = { Adapter }