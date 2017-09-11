class State {
  showState() {
    throw new Error('This is an abstract class')
  }
}

class StateOn extends State {
  showState(work) {
    if (work.state === 'on') {
      console.log('Work is on^^')
    } else {
      work.current = new StateOff()
      work.showState()
    }
  }
}

class StateOff extends State {
  showState(work) {
    if (work.state === 'off') {
      console.log('Work is off!')
    } else {
      work.current = new StateOn()
      work.showState()
    }
  }
}


module.exports = {
  StateOn,
  StateOff
}