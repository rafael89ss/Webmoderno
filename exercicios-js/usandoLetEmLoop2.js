const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]();
funcs[3]();
funcs[8]();

/**
 * Neste exemplo você ver que o let consegue armazenar os dados da variável em loop.
 */