class ProductA {
  constructor() {
    this.name = 'ProductA'
  }

  method() {
    throw new Error('This is an Abstract Interface!')
  }
}

class ProductA1 extends ProductA {
  constructor() {
    super()
  }

  method() {
    console.log('productA1')
  }
}

class ProductA2 extends ProductA {
  constructor() {
    super()
  }

  method() {
    console.log('productA2')
  }
}

class ProductB {
  constructor() {
    this.name = 'ProductB'
  }
}

class ProductB1 extends ProductB {
  constructor() {
    super()
  }

  method() {
    console.log('productB1')
  }
}

class ProductB2 extends ProductB {
  constructor() {
    super()
  }

  method() {
    console.log('productB2')
  }
}

class AbstractFactory {
  createProductA() {
    throw new Error('This is an Abstract Interface!')
  }

  createProductB() {
    throw new Error('This is an Abstract Interface!')
  }
}

class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ProductA1()
  }

  createProductB() {
    return new ProductB1()
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ProductA2()
  }

  createProductB() {
    return new ProductB2()
  }
}

module.exports = {
  ConcreteFactory1,
  ConcreteFactory2
}