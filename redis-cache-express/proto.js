function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function merge(a, b) {
  for (let key in b) {
    // 이 부분에서 key가 __proto__ 일 때에 건너뛰어야 한다.
    if (isObject(a[key]) && isObject(b[key])) {
      merge(a[key], b[key]);
    } else {
      a[key] = b[key];
    }
  }
  return a;
}

function clone(obj) {
  return merge({}, obj);
}

const express = require('express');
const app = express();
app.use(express.json());
app.post('/', (req, res) => {
  // 여기에서 악의적인 JSON을 그대로 복사함으로써 객체의 프로토타입 오염이 일어난다
  const obj = clone(req.body);
  const r = {};
  // 프로토타입 오염에 의해 r.status가 변조된다.
  const status = r.status ? r.status : 'NG';
  res.send(status)
});
app.listen(4000);
