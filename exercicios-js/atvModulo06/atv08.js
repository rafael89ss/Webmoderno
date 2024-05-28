/**
 * Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
 * registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
 * mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
 * pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
 * vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
 * jogo. (Número do pior jogo).
 * Obs.: O primeiro jogo não conta como novo recorde do melhor.
 * Exemplo:
 * String: “10 20 20 8 25 3 0 30 1”
 * Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
 * aconteceu no sétimo jogo.)
 */

function analisarDesempenho(pontuacoes) {
    let pontuacoesArray = pontuacoes.split(' ').map(Number);
    let melhor = pontuacoesArray[0];
    let pior = pontuacoesArray[0];
    let recordes = 0;
    let piorJogo = 0;

    for (let i = 1; i < pontuacoesArray.length; i++) {
        if (pontuacoesArray[i] > melhor) {
            melhor = pontuacoesArray[i];
            recordes++;
        }
        if (pontuacoesArray[i] < pior) {
            pior = pontuacoesArray[i];
            piorJogo = i;
        }
    }

    return [recordes, piorJogo + 1];
}

// Exemplos de uso:
let pontuacoes = "10 20 20 8 25 3 0 30 1";
console.log(analisarDesempenho(pontuacoes)); // Saída: [3, 7]


/**
 * Conversão da String para um Array:
 * 
 * A string de pontuações é dividida em um array de números usando split(' ') 
 * para separar pelos espaços e map(Number) para converter cada elemento para um número.
 * 
 * Inicialização de Variáveis:
 * 
 * melhor e pior são inicializados com a primeira pontuação.
 * recordes é inicializado como 0 para contar quantas vezes Pedro bateu seu recorde.
 * piorJogo é inicializado como 0 para armazenar o índice do pior jogo.
 * Loop de Comparação:
 * 
 * O loop começa do segundo jogo (índice 1) e compara cada pontuação com melhor e pior.
 * Se a pontuação atual é maior que melhor, melhor é atualizado e recordes é incrementado.
 * Se a pontuação atual é menor que pior, pior é atualizado e piorJogo é atualizado com o índice atual.
 * Retorno do Resultado:
 * 
 * A função retorna um array onde o primeiro elemento é o número de vezes que Pedro bateu seu recorde e o 
 * segundo elemento é o índice (1-based) do pior jogo.
 * Exemplos
 * Para a sequência "10 20 20 8 25 3 0 30 1":
 * Pedro bateu seu recorde de maior pontuação 3 vezes (nos jogos com 20, 25 e 30 pontos).
 * O pior jogo foi o sétimo (índice 6 na lista, mas 7 em 1-based).
 * 
 */