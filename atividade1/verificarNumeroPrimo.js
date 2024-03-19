function verificarNumeroPrimo(n) {
    if (n < 2) return false;
    let root = Math.floor(Math.sqrt(n))
    for (let i = 2; i <= root; i++) {
        if (n % i == 0) return false
    }
    return true;
}

for (let i = 0; i < 100; i++) {
    if (verificarNumeroPrimo(i)) {
        console.log(i)
    }
}
