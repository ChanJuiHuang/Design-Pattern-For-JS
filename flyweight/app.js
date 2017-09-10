const { FlyweightFactory } = require('./Flyweight')
const { UnsharedConcreteFlyweight } = require('./Flyweight')

const flyweightFactory = new FlyweightFactory()
let extrinsicState = 20

const flyweight0 = flyweightFactory.get(0)
flyweight0.method(--extrinsicState)

const flyweight1 = flyweightFactory.get(1)
flyweight1.method(--extrinsicState)

const flyweight2 = flyweightFactory.get(2)
flyweight2.method(--extrinsicState)


const unsharedFlyweight = new UnsharedConcreteFlyweight()
unsharedFlyweight.method(--extrinsicState)