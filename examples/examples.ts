import { CH_TRUE, CH_FALSE, CH_IF } from 'src/encodings/boolean-encoding.ts';
import { toChurch, fromChurch } from 'src/conversions/native-churchBool.ts';

console.log('TRUE:', CH_TRUE('This is true')('This is false'));
console.log('FALSE:', CH_FALSE('This is true')('This is false'));
console.log('IF TRUE:', CH_IF(CH_TRUE)('Then branch')('Else branch'));
console.log('IF FALSE:', CH_IF(CH_FALSE)('Then branch')('Else branch'));

// Demonstrate conversions
const nativeTrue = true;
const churchTrue = toChurch<string>(nativeTrue);
console.log('Native true to Church:', churchTrue('yes')('no'));
const churchBool = toChurch<boolean>(nativeTrue);
console.log('Church to native:', fromChurch(churchBool));
