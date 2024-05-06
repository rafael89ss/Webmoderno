function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeEuFalo()  // Falso
seForVerdadeEuFalo(null)  // Falso
seForVerdadeEuFalo(undefined)  // Falso
seForVerdadeEuFalo(NaN)  // Falso
seForVerdadeEuFalo('')  // Falso
seForVerdadeEuFalo(0)  // Falso
seForVerdadeEuFalo(-1)  //Verdadeiro
seForVerdadeEuFalo(' ')  //Verdadeiro
seForVerdadeEuFalo('?')  //Verdadeiro
seForVerdadeEuFalo([])  //Verdadeiro
seForVerdadeEuFalo([1,2])  //Verdadeiro
seForVerdadeEuFalo({})  //Verdadeiro