/**
 * Hoisting JavaScript é um comportamento padrão que move as declarações para o top.
 * 
 */

console.log(a);
{
    var a = 2
    console.log(a);
}