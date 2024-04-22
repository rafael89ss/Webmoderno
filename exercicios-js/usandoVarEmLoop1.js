/*
 * Declaração da Variável( var i = 0) -> i recebe 0
 * Condição que será aplicada ( i < 10) -> quando o valor que i for menor que 10 for falso, então encerra o loop
 * O encremento que será aplicado ( i++) -> i mais a soma de i
 */

for (var i = 0; i < 10; i++) {
    console.log(i);
}
// O resultado  aqui será o valor que fez o loop finalizar, que seria a comparação que 10 > 10, então falso
console.log('i =', i);