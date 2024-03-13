"use strict";

let first = 40;
let second = 2;

// Operadoes Aritméticos
const soma = first + second;
console.log(`Resultado da soma (+) entre ${first} e ${second} é ${soma}`);
const sub = first - second;
console.log(`Resultado da subtração (-) entre ${first} e ${second} é ${sub}`);
const mult = first * second;
console.log(
  `Resultado da multiplicação (*) entre ${first} e ${second} é ${mult}`,
);
const div = first / second;
console.log(`Resultado da divisão (/) entre ${first} e ${second} é ${div}`);

// Short Circuit
const shortCircuitOr = first || second;
console.log(
  `Resultado de 'first || second;' entre ${first} e ${second} é ${shortCircuitOr}`,
);
const shortCircuitAnd = first && second;
console.log(
  `Resultado de 'first && second;' entre ${first} e ${second} é ${shortCircuitAnd}`,
);

// Nullish Coescaling
const nullishCoescaling = undefined ?? first;
console.log(
  `Resultado de 'undefined ?? first' onde first=${first} é ${nullishCoescaling}`,
);
const nullishCoescaling2 = 1 ?? first;
console.log(
  `Resultado de '1 ?? first' onde first=${first} é ${nullishCoescaling2}`,
);
