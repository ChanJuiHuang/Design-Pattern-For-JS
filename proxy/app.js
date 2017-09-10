const { Proxy } = require('./Proxy')
const { RealSubject } = require('./Proxy')

const realSubject = new RealSubject()
const proxy = new Proxy(realSubject)

proxy.method()