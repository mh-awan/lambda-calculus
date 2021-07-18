
// x → ( y → x² + y²)

// Takes a single variable as input and returns a function
// The returned function itself accepts as input a single variable

const curriedFunction = (x: number) => {
  return (y: number) => (x * x) + (y * y) 
}

console.log(curriedFunction(2)(3))
