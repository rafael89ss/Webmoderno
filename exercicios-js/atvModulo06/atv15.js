/**
 * Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
 * possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
 * comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
 * que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
 * “Não trabalhamos com este tipo de automóvel aqui”.
 */

function comprarCarro(modelo){
    switch (modelo.toLowerCase()){
        case "hatch":
            console.log('Compra efetuada com sucesso!');
            break;
        case "sedan":
        case "motocicleta":
        case "Caminhonete":
            console.log('Tem certeza que não prefere este modelo?');
            break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui!');
    }
}

comprarCarro('hatch');       // Saída: Compra efetuada com sucesso
comprarCarro('sedan');       // Saída: Tem certeza que não prefere este modelo?
comprarCarro('motocicleta'); // Saída: Tem certeza que não prefere este modelo?
comprarCarro('caminhonete'); // Saída: Tem certeza que não prefere este modelo?
comprarCarro('bicicleta');   // Saída: Não trabalhamos com este tipo de automóvel aqui