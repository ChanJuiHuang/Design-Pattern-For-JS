const { Leaf } = require('./Leaf')
const { Composite } = require('./Composite')

const root = new Composite('root')

const leafA = new Leaf('leafA')
const leafB = new Leaf('leafB')

root.add(leafA)
root.add(leafB)


const comp1 = new Composite('comp1')
root.add(comp1)

const leaf1A = new Leaf('leaf1A')
const leaf1B = new Leaf('leaf1B')

comp1.add(leaf1A)
comp1.add(leaf1B)

const leafC = new Leaf('leafC')

root.add(leafC)


const leafD = new Leaf('leafD')
root.add(leafD)
root.delete(leafD)

root.display(1)