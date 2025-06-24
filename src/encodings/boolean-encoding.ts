import { ChurchBoolean } from './church-types.ts';

/**
 * Church encoding for boolean TRUE: λx.λy.x (returns the first argument)
 */
const CH_TRUE: ChurchBoolean<string> = (x: string) => {
  return (_y: string) => x
}

/**
 * Church encoding for boolean FALSE: λx.λy.y (returns the second argument)
 */
const CH_FALSE: ChurchBoolean<string> = (_x: string) => {
  return (y: string) => y
}

/**
 * Church encoding for IF: λp.λt.λf.p t f
 * p is the predicate clause
 * t evaluates to 'then clause' if p evaluates to true
 * f evaluates to 'else clause' if p evaluates to false
 */
const CH_IF = <T>(p: ChurchBoolean<T>) => (a: T) => (b: T): T => p(a)(b);

export { CH_TRUE, CH_FALSE, CH_IF }
