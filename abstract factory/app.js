const { ConcreteFactory1 } = require('./AbstractFactory')
const { ConcreteFactory2 } = require('./AbstractFactory')

const factory1 = new ConcreteFactory1()
const factory2 = new ConcreteFactory2()

const productA1 = factory1.createProductA()
const productB1 = factory1.createProductB()

productA1.method()
productB1.method()

console.log()

const productA2 = factory2.createProductA()
const productB2 = factory2.createProductB()

productA2.method()
productB2.method()
