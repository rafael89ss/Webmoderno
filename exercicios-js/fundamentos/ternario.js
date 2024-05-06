const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1));
console.log(resultado(6.7));


// Podendo ser assim também.
const result = notas => {
    return notas >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(result(7.1));
console.log(result(6.7));