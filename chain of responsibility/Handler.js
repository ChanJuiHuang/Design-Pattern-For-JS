class Handler {
  constructor(handler = null) {
    this.handler = handler
  }

  handleRequest() {
    throw new Error('This is an abstract class')
  }
}

class Handler1 extends Handler {
  constructor(handler = null) {
    super(handler)
  }

  handleRequest(request) {
    if (request > 0 && request <= 10) {
      return console.log('1 to 10 be handled by handler1')
    }
    this.handler.handleRequest(request)
  }
}

class Handler2 extends Handler {
  constructor(handler = null) {
    super(handler)
  }

  handleRequest(request) {
    if (request > 10 && request <= 20) {
      return console.log('10 to 20 be handled by handler2')
    }
    this.handler.handleRequest(request)
  }
}


module.exports = {
  Handler1,
  Handler2
}