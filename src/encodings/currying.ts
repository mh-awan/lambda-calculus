/**
 * 
 * This file contains functions that demonstrate currying.
*/

/**
 * 
 * @arguments
 * The returned 
*/

/**
 * x → ( y → λx.y) [TO-DO: fix this. may be inaccurate form]
 * 
 * Takes a single argument as input and returns a hardcoded function that 
 * sums the squares of the real values x and y.
 * 
 * @param x A real valued number
 * @returns A function that can accept as input another real valued number
 */
const currySumOfTwoSquaredVariables = (x: number) => {
  return (y: number) => (x * x) + (y * y)
}

/**
 * x → ( y → λx.y) [TO-DO: fix this. may be inaccurate representation]
 * 
 * Takes two argument as input and returns a hardcoded function that 
 * sums the two real values of x and y.
 * 
 * @param x A real valued number
 * @param curriedFunction A function that takes two arguments, namely x and y
 * @returns A function that can accept as input another real valued number
 */
const curryWithTwoVariables = (x: number, curriedFunction) => {
  return (y) => curriedFunction(x, y);
}

const example_function = (arg1: number, arg2: number) => {
  return (arg1 * arg1) + (arg2 * arg2);
}

console.log(currySumOfTwoSquaredVariables(2)(3));               // 13
console.log(curryWithTwoVariables(2, example_function)(3));     // 13
