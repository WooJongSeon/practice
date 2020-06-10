// function Person() {
//   this.eyes = 2;
//   this.nose = 1;
// }

// // kim 1개 객체에 대해서 메모리 2개 할당
// // 계속 만들면 메모리를 계속 소모하는 방식
// // console.log(kim.nose); // person 이 늘어나면 계속 할당
// const kim = new Person();
// const h = new Person();
// const km = new Person();
// const k = new Person();
// const kfm = new Person();

// console.log(kim);
// console.log(h);
// console.log(km);
// console.log(k);
// console.log(kfm);




function Person() {

}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;

const kim = new Person();
console.log(kim.eyes); // 값을 출력한다.

