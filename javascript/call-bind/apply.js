const obj = {
  string: 'hello',
  func: () => {
    console.log(this.string);
  }
}

const obj2 = {
  string: 'hi',
}

obj.func.apply(obj2);

