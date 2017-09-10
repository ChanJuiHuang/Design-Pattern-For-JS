const { RefinedAbstraction } = require('./Bridge')
const { ConcreteImplementor1 } = require('./Bridge')
const { ConcreteImplementor2 } = require('./Bridge')


const implementor1 = new ConcreteImplementor1()
const implementor2 = new ConcreteImplementor2()

const refinedAbstraction = new RefinedAbstraction(implementor1)
refinedAbstraction.method()

refinedAbstraction.setImplementor(implementor2)
refinedAbstraction.method()