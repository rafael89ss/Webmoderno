/**
 * Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
 * dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch
 */

function verificarDia(dia) {
    switch (dia) {
        case 1:
            console.log("Domingo - Fim de semana");
            break;
        case 2:
            console.log("Segunda-feira - Dia útil");
            break;
        case 3:
            console.log("Terça-feira - Dia útil");
            break;
        case 4:
            console.log("Quarta-feira - Dia útil");
            break;
        case 5:
            console.log("Quinta-feira - Dia útil");
            break;
        case 6:
            console.log("Sexta-feira - Dia útil");
            break;
        case 7:
            console.log("Sábado - Fim de semana");
            break;
        default:
            console.log("Dia inválido");
    }
}

// Exemplos de uso:
verificarDia(1); // Saída: Domingo - Fim de semana
verificarDia(3); // Saída: Terça-feira - Dia útil
verificarDia(6); // Saída: Sexta-feira - Dia útil
verificarDia(7); // Saída: Sábado - Fim de semana
verificarDia(0); // Saída: Dia inválido
verificarDia(8); // Saída: Dia inválido


/**
 * Função verificarDia:
 * 
 * Recebe um número representando um dia da semana.
 * Usa a estrutura switch para verificar o valor de dia.
 * Dependendo do valor de dia, imprime no console se o dia é um dia útil, fim de semana ou dia inválido.
 * case 1 e case 7 representam os dias de fim de semana (Domingo e Sábado).
 * case 2 a case 6 representam os dias úteis (Segunda a Sexta).
 * default é usado para lidar com valores inválidos que não correspondem a nenhum dia da semana.
 */
