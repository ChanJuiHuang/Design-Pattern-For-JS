class Item1 {
  constructor(name) {
    this.name = name
  }
}

class Item2 {
  constructor(name) {
    this.name = name
  }
}

class Factory {
  createItem(name) {
    if (name === 'item1') return new Item1(name)
    else if (name === 'item2') return new Item2(name)
  }
}

module.exports = Factory