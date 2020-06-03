const item = {
  a: 'a',
  b: undefined,
  c: 'c',
  d: undefined,
  e: 'e',
  f: 'f',
  g: 'g',
  h: undefined,
  i: 'i',
  j: 'j',
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
            console.log(payload[value]);
          }, 10);
        }
      })
    })();
  }
}

Obj.patch(item);
