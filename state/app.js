const { Work } = require('./Work')
const { StateOn } = require('./State')
const { StateOff } = require('./State')


const work = new Work()

work.showState()

work.state = 'off'
work.showState()

work.state = 'on'
work.showState()