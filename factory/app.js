const Factory = require('./Factory')

const factory = new Factory()
const item1 = factory.createItem('item1')
const item2 = factory.createItem('item2')

console.log(item1)
console.log(item2)
