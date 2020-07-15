const axios = require('axios');

(async function () {
  for await (const iterator of [1, 2, 3, 4, 5, 6, 7, 8]) {
    try {
      await axios.default.get(`https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=vvvv`);
      console.log('done');
      if (iterator === 3) {
        throw new Error();
      }
    } catch (error) {
      console.log('error');
    }
  }
})();

