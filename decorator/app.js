const { ConcreteComponent } = require('./Decorator')
const { ConcreteDecorator } = require('./Decorator')

const person = new ConcreteComponent('Bob')

const shirt = new ConcreteDecorator('shirt')
const pants = new ConcreteDecorator('pants')
const shoes = new ConcreteDecorator('shoes')

shirt.decorate(person)
pants.decorate(shirt)
shoes.decorate(pants)

shoes.display()