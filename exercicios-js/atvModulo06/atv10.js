/**
 * Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
 * ou false.
 */

function ehDivisivelPor3(numero){
    return numero % 3 === 0;
}
console.log(ehDivisivelPor3(9));        // Saída: true
console.log(ehDivisivelPor3(10));        // Saída: false
console.log(ehDivisivelPor3(15));        // Saída: true
console.log(ehDivisivelPor3(7));        // Saída: false

/**
 * Função ehDivisivelPor3:
 * 
 * Recebe um número inteiro como parâmetro.
 * Usa o operador de módulo % para verificar se o resto da divisão do número por 3 é zero.
 * Se o resto for zero (numero % 3 === 0), o número é divisível por 3 e a função retorna true.
 * Caso contrário, a função retorna false.
 */