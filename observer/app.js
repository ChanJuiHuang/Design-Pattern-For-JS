const { ConcreteSubject } = require('./Subject')
const { ConcreteObserver } = require('./Observer')


const subject = new ConcreteSubject()
const observer1 = new ConcreteObserver(subject)
const observer2 = new ConcreteObserver(subject)

subject.addObserver(observer1)
subject.addObserver(observer2)

subject.state = 'on'
subject.notify()
