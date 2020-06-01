const getClosure = () => {
  const value = 10;
  const closure = () => {
    return value;
  }
  return closure;
}


const closure = getClosure();

console.log(closure())
