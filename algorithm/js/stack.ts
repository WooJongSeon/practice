class Stack {
    array; constructor() {
        this.array = [];
    }
    public push(data) {
        this.array.push(data); // 배열에 요소를 추가한다 
    } public pop() {
        return this.array.pop(); // 배열의 맨 뒤에서 요소를 빼낸다.
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
