const obj = {
  async hello() {
    console.log('hi');
  },
  hi() {
    console.log('hi');
  },
  method() {
    console.log('hi');
  },
}
obj['hello']();
obj['hi']();
obj['method']();

class Obj {
  static hello() {
    console.log('static hello');
  }
  static hi() {
    console.log('static hi');
  }
  static method() {
    console.log('static method');
  }
}
Obj['hello']();
Obj['hi']();
Obj['method']();
