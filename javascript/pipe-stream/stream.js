const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file'); // read stream을 사용해서 읽기
  src.pipe(res);
});

server.listen(8000);
(async function name() {

})();
