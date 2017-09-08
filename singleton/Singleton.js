class Singleton {
  static getInstance() {
    if (!Singleton.instance) {
      console.log('Create one instance!')
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

Singleton.instance = null

module.exports = { Singleton }
