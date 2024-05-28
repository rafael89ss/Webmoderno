/**
 * As regras para o cálculo dos anos bissextos são as seguintes:
 * De 4 em 4 anos é ano bissexto;
 * De 100 em 100 anos não é ano bissexto;
 * De 400 em 400 anos é ano bissexto;
 * Prevalecem as últimas regras sobre as primeiras.
 * Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
 * mensagem e retornando true ou false.
 */

function ehAnoBissexto(ano){
    if ((ano % 400 === 0)  || (ano % 4 === 0 && ano % 100 !== 0) ){
        console.log(`${ano} é um ano bissexto.`);
        return true;
    } else {
        console.log(`${ano} não é um ano bissexto.`);
        return false;
    }
}


console.log(ehAnoBissexto(2020)); // Saída: 2020 é um ano bissexto. true
console.log(ehAnoBissexto(1900)); // Saída: 1900 não é um ano bissexto. false
console.log(ehAnoBissexto(2000)); // Saída: 2000 é um ano bissexto. true
console.log(ehAnoBissexto(2021)); // Saída: 2021 não é um ano bissexto. false

/**
 * Função ehAnoBissexto:
 * 
 * Recebe um ano como parâmetro.
 * Verifica se o ano é divisível por 400. Se for, o ano é bissexto.
 * Se não for divisível por 400, verifica se é divisível por 4 e não por 100. Se for, o ano é bissexto.
 * Se não satisfizer nenhuma das condições acima, o ano não é bissexto.
 * Imprime no console uma mensagem indicando se o ano é ou não bissexto.
 * Retorna true se o ano é bissexto e false caso contrário.
 */