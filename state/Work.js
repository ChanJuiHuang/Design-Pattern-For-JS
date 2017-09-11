const { StateOn } = require('./State')

class Work {
  constructor() {
    this.state = 'on'
    this.current = new StateOn()
  }

  showState() {
    this.current.showState(this)
  }
}


module.exports = { Work }