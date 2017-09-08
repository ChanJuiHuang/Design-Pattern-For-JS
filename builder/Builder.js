class Builder {
  builderPart1() {
    throw new Error('This is an Abstract Interface!')
  }

  builderPart2() {
    throw new Error('This is an Abstract Interface!')
  }
}

class Product {
  constructor() {
    this.parts = []
  }

  addPart(part) {
    this.parts.push(part)
  }
}

class ConcreteBuilder1 extends Builder {
  constructor() {
    super()
    this.product = new Product()
  }

  builderPart1() {
    this.product.addPart('part1')
  }

  builderPart2() {
    this.product.addPart('part2')
  }

  getProduct() {
    return this.product
  }
}

module.exports = { ConcreteBuilder1 }