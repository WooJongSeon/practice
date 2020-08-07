class Queue {

  arr: any[];
  constructor() {
    this.arr = [];
  }
  in(val: any) {
    this.arr.push(val);
  }
  out() {
    return this.arr.shift();
  }
}


const queue = new Queue();

for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  queue.in(i);
}
console.log(
  queue.out()
)
console.log(
  queue.out()
)
console.log(
  queue.out()
)
console.log(
  queue.out()
)
