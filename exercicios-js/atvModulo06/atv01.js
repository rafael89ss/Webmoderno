/**
 * 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores.
 */

function calculadora(num1, num2, operacao){
    switch (operacao){
        case 'adição':
        case 'Soma':
            return num1 + num2;

        case 'subtração':
        case 'menos':
            return num1 - num2;

        case 'multiplicação':
        case 'vezes':
            return num1 * num2;
        
        case 'divisão':
        case 'dividir':
            if (num2 === 0) {
                return 'Erro: divisão por zero';
            }
            return num1 / num2;
        default:
            return 'Operação inválida';
        
            
    }
}

console.log(calculadora(10, 7, 'adição'));      // Saída: 17
console.log(calculadora(10, 7, 'subtração'));   // Saída: 3
console.log(calculadora(10, 7, 'vezes'));       // Saída: 50
console.log(calculadora(10, 5, 'dividir'));     // Saída: 2
console.log(calculadora(10, 0, 'divisão'));     // Saída: 'Erro: divisão por zero'
console.log(calculadora(10, 7, 'potência'));    // Saída: 'Operação inválida'

/**
 * A função calculadora recebe três parâmetros: num1, num2, e operacao.
 * Dependendo do valor de operacao, a função executa a operação correspondente usando um switch:
 * Para adição ou soma, retorna a soma dos números.
 * Para subtração ou menos, retorna a diferença dos números.
 * Para multiplicação ou vezes, retorna o produto dos números.
 * Para divisão ou dividir, verifica se num2 é diferente de zero antes de realizar a divisão para evitar divisão por zero.
 * Se a operação não for reconhecida, retorna 'Operação inválida'.
 * Os exemplos no final demonstram como a função pode ser usada para realizar diferentes operações matemáticas.
 */