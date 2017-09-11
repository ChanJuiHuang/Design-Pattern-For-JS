const { Handler1 } = require('./Handler')
const { Handler2 } = require('./Handler')


const handler2 = new Handler2()
const handler1 = new Handler1(handler2)

let request = 5

handler1.handleRequest(request)
request = 20
handler1.handleRequest(request)
