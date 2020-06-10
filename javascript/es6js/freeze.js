const a = {

}
a.name = 'hello';
console.log(a); // name: hello 출력
Object.freeze(a); // 불변 객체로 만든다.
a.name = 'adf'; // 여기서 할당해도 안바뀜
console.log(a);
