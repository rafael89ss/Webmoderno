function teste1(num){
    if(num > 7)
        console.log(num)
    console.log('Final')  // Sem chave o if so tem o primerio que está assossiado
}
teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7);{ // Cuidade com o ";" não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)