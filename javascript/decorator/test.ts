
interface Test {
  id: string;
  name: string;
  hello: string;
}

const jsonIgnore = <T>(fields: Array<any>, obj: T) => {
  fields.map((key) => {
    delete obj[key]
  })
  return obj;
}

const test: Test = {
  id: 'hello',
  hello: 'f',
  name: 'adf',
};
const result = jsonIgnore(['hello'], test);

console.log(result);
