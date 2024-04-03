export function isNumberPrime(n) {
  if (n < 2) return false;
  let root = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= root; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
