function parimpar(n) {
    if (n == 0) {
        return `ERRO`
    } else {
        if (n % 2 == 0) {
            return "Par"
        } else {
            return "impar"
        }
    }
} let res = parimpar(16)
console.log(`${res}`)