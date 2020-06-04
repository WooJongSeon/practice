function asyncFlow(generatorFunction) {
  function callback(err) {
    if(err) {
      return generator.throw(err);
    }
    const results = [].slice.call(arguments, 1);
    generator.next(results.length > 1 ? results: results[0]);
  }
  const generator = generatorFunction(callback);
  generator.next();
}

const fs =require('fs');
const path = require('path');
asyncFlow(function* name(callback) {
  const fileName = path.basename(__filename);
  const myself = yield fs.readFile(fileName, 'utf8', callback);
  yield fs.writeFile(`clone_of_${fileName}`,myself, callback);
  console.log('clone');
})

// const axios = require('axios');
// // function* iterGene() {
// //   const what = yield null;
// //   console.log('hello' + what);
// // }
// // const gene = iterGene();
// // gene.next();
// // gene.next('world');
// (function name() {
//   [1, 2, 3, 4, 5, 6].forEach(() => {
//     try {
//       setTimeout(async () => {
//         const result = await axios.get("http://localhost:3000/api/v1/partner-user")
//         console.log(result.data);
//       }, 1000); // 1초에 하나씩 되도록 하고 중간에 서버를 꺼보자
//     } catch (error) {
//       console.error(error);
//     }
//   })
// })();
