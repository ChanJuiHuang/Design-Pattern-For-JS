const Prototype = require('./Prototype')

const prototype = new Prototype()

const obj = prototype.clone()

console.log(obj.property1)
console.log(obj.property2)
console.log()

obj.setProperty2('property2')
console.log(obj.property2)