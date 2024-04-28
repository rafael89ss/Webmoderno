console.log('01)', '1' == 1);  // 1 é igual 1?  - Não levando em consideração se é string
console.log('02)', '1' === 1);  // "1" é igual 1? - Levando em consideração que o "1" é uma string
console.log('03', '3' != 3);  // '3' é diferente de 3? - Não levando em consideração se é string
console.log('04', '3' !== 3);  // '3' é diferente de 3? - Levando em consideração


console.log('05)', 3 < 2);  // 3 é menor que 2?
console.log('06)', 3 > 2);  //3 é maior que 2?
console.log('07)', 3 <= 2);  // 3 é menor igual a 2?
console.log('08)', 3 >= 2);  //3 é maior igual a 2?

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2);  // d1 é extritamente(===) igual a d2?
console.log('10)', d1 == d2);   // d1 é igual a d2?
// Ambos deram falsos porque a comparação está sendo sobre onde estão armazenado
console.log('11)', d1.getTime() == d2.getTime());  // d1 é igual a d2?
// Será verdadeiro porque a comparação é com o conteúdo armazenado. Sendo == ou ===

console.log('12)', undefined == null);
console.log('13)', undefined === null);

// Se for usa, o indicado é usa extritamente igual ===


