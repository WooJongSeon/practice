function* iterGene(arr: Array<any>) {
  for (let index = 0; index < arr.length; index++) {
    yield arr[index];
  }
}
const gen = iterGene(['apple', 'afsaf', 'cvzxv', 'cv', 'sfdg']);
let currentItem = gen.next();
while (!currentItem.done) {
  console.log(currentItem.value);
  currentItem = gen.next();
}

// await axios.get("https://api.spacexdata.com/v3/launches/latest")
