const escola = "Cod3r";

console.log(escola.charAt(4));  //mostra o quarto caracter escrito na constante escola.
console.log(escola.charAt(5));  //mostra o quinto caracter escrito na constante escola.
console.log(escola.charCodeAt(3));  //tras o valor referente ao 3, o código HTML
console.log(escola.indexOf('d'));  // Este faz o inverso, mostra que ordem esta a string.
console.log(escola.substring("1"));  //Este remove a ordem informada.
console.log(escola.substring(0, 3));  //vai do indice 0 até o 2.


console.log('Escola'.concat(escola.concat("!")));  //Concatenado
console.log(escola.replace(3, 'e'));  //Substitui o 3 pela letra e.

console.log('Ana,Maria, Pedro'.split(','));  //transformando em Array split escolhe o separador.



