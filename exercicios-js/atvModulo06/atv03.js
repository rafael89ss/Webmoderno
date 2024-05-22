/**
 * 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */

function elevar(base, expoente){
    return Math.pow(base, expoente);
}

console.log(elevar(2, 3));      // Saída: 8
console.log(elevar(5, 2));      // Saída: 25
console.log(elevar(7, 0));      // Saída: 1
console.log(elevar(10, -2));      // Saída: 0.01
console.log(elevar(4, 0.5));      // Saída: 2

/**
 * Math.pow(base, expoente) é uma função integrada do JavaScript que calcula a base elevada ao expoente.
 * A função elevar simplesmente chama Math.pow com os parâmetros fornecidos e retorna o resultado.
 */