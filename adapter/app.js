const { Adapter } = require('./Adapter')
const { Adaptee } = require('./Adaptee')

const adaptee = new Adaptee()
const adapter = new Adapter(adaptee)

adapter.request()