class Queue {
    array = [];
    /** * enqueue */
    public enqueue(data) {
        this.array.push(data); // 배열에 요소를 추가한다 
    }
    /** * dequeue */
    public dequeue() {
        return this.array.shift(); // 첫번째 요소를 반환하고 제거한다.
    }
} const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
