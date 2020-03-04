class Arr {
    array;
    constructor() {
        this.array = [];
    }
    public push(data) {
        this.array.push(data); // 배열에 요소를 추가한다 
    } public pop() {
        return this.array.pop(); // 배열의 맨 뒤에서 요소를 빼낸다.
    }
}
const arr = new Arr();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
