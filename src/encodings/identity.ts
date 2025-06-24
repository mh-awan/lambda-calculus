type A = {
  property: string;
}

type B = {
  property: number;
}

// A → B, i.e. a function from type A to type B
type AtoB = {
  (a: A): B; 
}

// Identity functions
// id = λx.x
const id = (x: A) => x
// id = λ(x → y).(x → y)
const id1 = (x: AtoB) => x

const a_to_b_example: AtoB = ({property: a}) => {
  return {
    property: Number(a)
  }
}

console.log(id({property: 'example'}))
console.log(id1(a_to_b_example))
