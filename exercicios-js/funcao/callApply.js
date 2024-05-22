function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
// Como não declarei como global apresentará erro!
console.log(getPreco())

globalThis.preco = 20
globalThis.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())

//Também posso declarar apartir de um objeto.
const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.18, '$']))

