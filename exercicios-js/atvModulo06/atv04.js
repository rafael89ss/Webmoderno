/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
 */
function divisao(dividendo, divisor){
    if (divisor === 0){
        console.log('Erro: divisão por zero');
        return;
    }
    const resultado = Math.floor(dividendo / divisor);
    const resto = dividendo % divisor;
    console.log(`Resultado: ${resultado}, Resto: ${resto}`);
}

divisao(10, 3);     // Resultado: 3, Resto: 1
divisao(20, 4);     // Resultado: 5, Resto: 0
divisao(15, 6);     // Resultado: 2, Resto: 3
divisao(7, 2);      // Resultado: 3, Resto: 1
divisao(10, 2);     // Resultado: 5, Resto: 0




/**
 * Primeiro, verificamos se o divisor é 0 para evitar a divisão por zero. Se for, imprimimos
 *  uma mensagem de erro e retornamos da função.
 * Usamos Math.floor(dividendo / divisor) para calcular o resultado inteiro da divisão.
 * Usamos o operador de módulo % para calcular o resto da divisão.
 * Imprimimos o resultado e o resto no formato Resultado: [resultado], Resto: [resto].
 */