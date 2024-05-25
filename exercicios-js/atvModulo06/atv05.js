/**
 * Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
 * seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
 * importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
 * um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
 * que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
 */

function formatarDinheiro(valor){
    // Arrendondado o valor para duas casas decimais
    let valorArredondado = valor.toFixed(2);

    // Substitui o ponto por vígula
    let valorFormatado = valorArredondado.replace('.', ',');

    // Retorna o valor formatado como string com prefixo "R$"
    return `R$${valorFormatado}`;
}

console.log(formatarDinheiro(0.300000000000000004));        // Saída: R$0,30
console.log(formatarDinheiro(1.2345));                      // Saída: R$1,23
console.log(formatarDinheiro(10));                          // Saída: R$10,00
console.log(formatarDinheiro(1000.5));                      // Saída: R$1000,50
console.log(formatarDinheiro(0.1 + 0.2));                   // Saída: R$0,30

/**
 * rredondamento: Usamos toFixed(2) para arredondar o valor para duas casas decimais. 
 * Isso garante que temos sempre dois dígitos após a vírgula.
 * Substituição do ponto por vírgula: Usamos replace('.', ',') para trocar o ponto decimal por uma vírgula,
 *  conforme a convenção brasileira para formatação de números monetários.
 * Formatação final: Adicionamos o prefixo "R$" ao valor formatado.
 */