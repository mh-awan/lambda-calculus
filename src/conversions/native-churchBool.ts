import { ChurchBoolean } from '../encodings/church-types.ts';

// Native boolean to Church boolean
export function toChurch<T>(b: boolean): ChurchBoolean<T> {
  return b ? (_x: T) => (_y: T) => _x : (_x: T) => (_y: T) => _y;
}

// Church boolean to native boolean
export function fromChurch(cb: ChurchBoolean<boolean>): boolean {
  return cb(true)(false);
}

// Example usage:
// const churchTrue = toChurch<string>(true);
// console.log(churchTrue('yes')('no')); // 'yes'
// const nativeTrue = fromChurch(churchTrue); // true 