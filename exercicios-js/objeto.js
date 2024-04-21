//  Pode ser usado fora da chave
const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40  // Evitar atributos como espaço

console.log(prod1);

// Pode ser usado dentro da chave
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,

        };
console.log(prod2);
