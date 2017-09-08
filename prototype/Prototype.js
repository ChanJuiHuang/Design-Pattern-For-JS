class Prototype {
  constructor() {
    this.property1 = 'property1'
    this.property2 = 'empty property'
  }

  getProperty1() {
    return this.property1
  }

  setProperty2(property) {
    this.property2 = property
  }

  clone() {
    return Object.create(this)
  }
}

module.exports = Prototype