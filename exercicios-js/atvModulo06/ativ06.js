/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos
 */

/**
 * Função calcularJurosSimples:
 * 
 * Calcula o montante usando a fórmula de juros simples.
 * Arredonda o resultado para duas casas decimais usando toFixed(2).
 */

function calcularJurosSimples(capitalInicial, taxaJuros, tempo){
    const montante = capitalInicial * (1 + (taxaJuros * tempo));
    return montante.toFixed(2);     // Arredondar para duas casa decimais
}

/*
 * Função calcularJurosCompostos:
 * 
 * Calcula o montante usando a fórmula de juros compostos.
 * Arredonda o resultado para duas casas decimais usando toFixed(2).
 */

function calculaJurosCompostos(capitalInicial, taxaJuros, tempo){
    const montante = capitalInicial * Math.pow((1 + taxaJuros), tempo);
    return montante.toFixed(2);     // Arredondar para duas casas decimais
}

const capitalInicial = 1000;
const taxaJuros = 0.05;  // 5%
const tempo = 2;  // 2 Anos

const montanteSimples = calcularJurosSimples(capitalInicial, taxaJuros, tempo);
const montanteComposto = calculaJurosCompostos(capitalInicial, taxaJuros, tempo);

console.log(`Montante com Juros Simples: R$${montanteSimples}`); // Saída: Montante com Juros Simples: R$1100.00
console.log(`Montante com Juros Composto: R$${montanteComposto}`);  // Saída: Montante com Juros Composto: R$1102.50

