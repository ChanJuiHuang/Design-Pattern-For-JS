class Facade {
  constructor(){
    this.subSystem1 = new SubSystem1()
    this.subSystem2 = new SubSystem2()
    this.subSystem3 = new SubSystem3()
    this.subSystem4 = new SubSystem4()
  }

  methodA(){
    console.log('MethodA:')
    console.log('-----')
    this.subSystem1.method1()
    this.subSystem2.method2()
    console.log('-----')
  }

  methodB(){
    console.log('MethodB:')
    console.log('-----')
    this.subSystem3.method3()
    this.subSystem4.method4()
    console.log('-----')
  }
}

class SubSystem1 {
  method1(){
    console.log('method1')
  }
}

class SubSystem2 {
  method2() {
    console.log('method2')
  }
}

class SubSystem3 {
  method3() {
    console.log('method3')
  }
}

class SubSystem4 {
  method4() {
    console.log('method4')
  }
}


module.exports = { Facade }