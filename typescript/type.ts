let x: [string, number];

x = ['hello', 10];

enum Color {
  Red = 1, Green, Blue
}

console.log(Color[1]);

let list = [1, 'df', true, false, [1, 2, 3]]
console.log(list);

const objectFunc = (o: object) => {

}

let someValue: any = 'this is string';

let strLength: number = (<string>someValue).length;

(<string>someValue).length;


interface Temp {
  name: string;
  age: number;
}
let temp: any = {};

(<Temp>temp).age; // as 와 같은 역할을 한다. type assertions
(temp as Temp).age;
