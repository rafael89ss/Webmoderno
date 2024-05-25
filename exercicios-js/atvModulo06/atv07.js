/**
 * Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
 * elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
 * parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
 * -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
 * que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
 * “Delta é negativo”.
 */

function resolverBhaskara(ax2, bx, c){
    const delta = bx * bx - 4 * ax2 *c;

    if (delta < 0) {
        return "Delta é negativo";
    }

    const raizDelta = Math.sqrt(delta);
    const x1 = (-bx + raizDelta) / (2 * ax2);
    const x2 = (-bx - raizDelta) / (2 * ax2);

    return [x1, x2];
}

console.log(resolverBhaskara(3, -5, 12)); // Saída: "Delta é negativo"
console.log(resolverBhaskara(1, -3, 2));  // Saída: [2, 1]
console.log(resolverBhaskara(1, -2, 1));  // Saída: [1, 1]
console.log(resolverBhaskara(1, 4, 4));   // Saída: [-2, -2]

/**
 * Para a equação 3𝑥² − 5𝑥 + 12 (onde 𝑎 = 3, 𝑏 = −5, 𝑐 = 12):
 * Δ é negativo, então a saída é "Delta é negativo".
 * 
 * Para a equação 𝑥² − 3𝑥 + 2 (onde 𝑎 = 1, 𝑏 = −3, 𝑐 = 2):
 * As raízes são 𝑥1 = 2 e 𝑥2 = 1.
 * 
 * Para a equação  𝑥² − 2𝑥 + 1 (onde 𝑎 = 1, 𝑏 = −2, 𝑐 = 1):
 * As raízes são iguais: 𝑥1 = 𝑥² = 1.
 * 
 * Para a equação 𝑥² + 4𝑥 + 4 (onde 𝑎 = 1, 𝑏 = 4, 𝑐 = 4):
 * As raízes são iguais: 𝑥1 = 𝑥² = −2.
 */