const axios = require('axios');
function* apiCall() {
  for (i in [1, 2, 3, 4, 5]) {
    yield axios.get("https://api.spacexdata.com/v3/launches/latest");
  }
}

const api = apiCall();
for (const key in [1, 2, 3, 4, 5]) {
  api.next().value.then((value) => {
    console.log(value);
  }).catch((error) => {
    console.error(error);
  }) // 0
}
