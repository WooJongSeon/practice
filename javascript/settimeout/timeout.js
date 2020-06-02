setTimeout(function timeout() {
  console.log("Cl!");

  setTimeout(function timeout() {
    console.log("Cl1111the button!");

    setTimeout(function timeout() {
      console.log("Clhe button!");
    }, 30);

  }, 30);

}, 30);

console.log("Welcome to loupe.");
