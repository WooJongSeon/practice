const item = {
  a: 'value',
  b: undefined,
  c: 'value',
  d: undefined,
  e: 'value',
  f: 'value',
  g: 'value',
  h: undefined,
  i: 'value',
  j: 'value',
}

// Object.keys(item).map((value) => {
//   if (item[value]) {
//     console.log(value);
//   }
// })

class Obj {
  static async patch(payload) {
    await (async function hello() {
      Object.keys(payload).map((value) => {
        if ((payload as any)[value]) {
          setTimeout(() => {
            console.log(`key : ${value}  value : ${payload[value]}`);
          }, 10);
        }
      })
    })();
  }
}

Obj.patch(item);
