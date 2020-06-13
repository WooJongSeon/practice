setTimeout(function() { // (A)
  console.log('A');
}, 0);
Promise.resolve().then(function() { // (B)
  console.log('B');
}).then(function() { // (C)
  console.log('C');
}).then(() => {
  console.log('D');
})

setImmediate(() => {
  console.log('immediate');
});
