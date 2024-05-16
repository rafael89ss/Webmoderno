console.log(soma(3, 4))
// Function declaration  // nesta função é carregado tudo no início

function soma(x, y) {
    return x + y
}

// Function expression                 Só funciona depois que a função é declarada
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// name function expression            Só funciona depois que a função é declarada 
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))




