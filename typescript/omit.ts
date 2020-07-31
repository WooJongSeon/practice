
const payload: any = {
  name: 'this',
  title: 'hello',
  pay: 'hi'
}

interface Todo {
  title: string;
  name: string
}

// name 제외한 타입 생성
type ExceptName = Omit<Todo, 'name'>

// name 제외
const value: ExceptName = {
  title: 'hhhh'
}
console.log(value);

// console.log(todo);
