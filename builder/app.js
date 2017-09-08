const { ConcreteBuilder1 } = require('./Builder')
const Director = require('./Director')

const builder1 = new ConcreteBuilder1()
const director = new Director(builder1)

const product = builder1.getProduct()

console.log(product.parts)