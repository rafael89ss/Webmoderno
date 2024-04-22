let numero = 1
{
    let numero = 2
    console.log('dentro =', numero);
}
console.log('fora =', numero);


// Tentará encontrar a variável dentro do bloco antes para depois e para a parte global.