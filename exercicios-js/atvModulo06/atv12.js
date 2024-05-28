/**
 * Faça um algoritmo que calcule o fatorial de um número.
 */

// Usando Recursão

function fatorial(n) {
    if ( n === 0 || n === 1){
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

// Exemplos de uso:
console.log(fatorial(5)); // Saída: 120
console.log(fatorial(0)); // Saída: 1
console.log(fatorial(7)); // Saída: 5040

/**
 * Usando Recursão:
 * 
 * A função fatorial chama a si mesma até que o valor de n seja 0 ou 1, ponto em que a função retorna 1, 
 * pois o fatorial de 0 e 1 é 1.
 * Para qualquer outro valor de n, a função retorna n multiplicado pelo fatorial de n - 1.
 */



// Usando Loop

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let resultado = 1;
    for ( let i =2; i <= n; i++) {
        resultado*= i;
    }
    return resultado;
}

// Exemplos de uso:
console.log(fatorial(5)); // Saída: 120
console.log(fatorial(0)); // Saída: 1
console.log(fatorial(7)); // Saída: 5040

/**
 * Usando Loop:
 * 
 * A função fatorial utiliza um loop para multiplicar todos os números de 1 até n.
 * Inicializa resultado como 1.
 * Usa um loop for para multiplicar resultado por cada número de 2 até n.
 */