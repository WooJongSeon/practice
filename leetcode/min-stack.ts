class MinStack {
  arr: any[];
  constructor() {
    this.arr = [];
  }

  push(x: number): void {
    this.arr.push(x);
  }

  pop(): void {
    this.arr.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    const copyArr: any[] = JSON.parse(JSON.stringify(this.arr));
    return copyArr.sort((a, b) => a - b)[0];
  }
}
(function name() {
  const minStack = new MinStack();
  minStack.push(5);
  minStack.push(1);
  minStack.push(0);
  minStack.push(-5);
  minStack.push(3);
  console.log(minStack.getMin())
})();

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
