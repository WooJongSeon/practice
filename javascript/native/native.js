const a = 'name';
console.log(a.length);
console.log(a.toString());

const falsy1 = Boolean(false);
const falsy2 = Number(0);
const falsy3 = String('');
const b = Boolean(falsy1 && falsy2 && falsy3);
console.log(b);
