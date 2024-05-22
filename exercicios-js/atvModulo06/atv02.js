/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
 */

function classficadorTriangulo(lado1, lado2, lado3){
    if (lado1 === lado2 && lado2 === lado3){
        return "Equilátero";        //Se forem, o triângulo é classificado como Equilátero
    }else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        return "Isósceles";          //O triângulo é classificado como Isósceles.
    } else {
        return "Escaleno";           //Se todos os lados são diferentes, o triângulo é classificado como Escaleno.
    }
}

console.log(classficadorTriangulo(3, 3, 3));        //Equilátero
console.log(classficadorTriangulo(3, 2, 3));        //Isósceles
console.log(classficadorTriangulo(3, 2, 5));        //Escaleno
console.log(classficadorTriangulo(5, 3, 3));        //Isósceles
console.log(classficadorTriangulo(6, 2, 9));        //Escaleno
console.log(classficadorTriangulo(5, 5, 5));        //Equilátero