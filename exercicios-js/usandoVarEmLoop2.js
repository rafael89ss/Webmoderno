/*
 *  Este exemplo é para demostrar que a variável nao apresentará
 *  o valor que esoeravamos em i
 *
*/
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
