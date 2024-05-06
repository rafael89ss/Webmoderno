let num1 = 1
let num2 = 2

num1++
console.log(num1);
--num1
console.log(num1);

console.log(++num1 === num2--);  // Será comparando antes da decrementação.
console.log(num1 === num2);  // Após a decrementação apresemta falso.
