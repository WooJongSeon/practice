function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
}
console.log(process.memoryUsage())
