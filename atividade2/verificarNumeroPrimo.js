function verificarNumeroPrimo(n) {
  if (n < 2) return false;
  let root = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= root; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

const tests = [
  verificarNumeroPrimo(0), //false
  verificarNumeroPrimo(1), //false
  verificarNumeroPrimo(2), //true
  verificarNumeroPrimo(3), //true
  verificarNumeroPrimo(7), //true
  verificarNumeroPrimo(83), //true
  verificarNumeroPrimo(100), //false
  verificarNumeroPrimo(991), //true
  verificarNumeroPrimo(104729), //true
  verificarNumeroPrimo(14348907), // false
];
console.log(tests);
