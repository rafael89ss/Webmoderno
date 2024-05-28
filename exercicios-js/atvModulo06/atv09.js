/**
 * Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
 * classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
 * possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
 * que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
 * arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
 * 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
 * seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
 * e o aluno será aprovado.
 */

function arredondarNota(nota){
    if (nota < 38){
        return nota;
    }

    let proximoMultiploDeCinco = Math.ceil(nota / 5) * 5;

    if (proximoMultiploDeCinco - nota < 3){
        return proximoMultiploDeCinco;
    } else{
        return nota;
    }
}

function classificarNotas(notas) {
    return notas.map(nota => {
        let notaFinal = arredondarNota(nota);
        let status = notaFinal >= 40 ? 'Aprovado' : 'Reprovado';
        return {notaOriginal: nota, notaFinal, status };
    });

}


let notas = [84, 29, 57, 38, 73];
let resultados = classificarNotas(notas);
console.log(resultados);

/**
 * Função arredondarNota:
 * 
 * Se a nota é menor que 38, a função retorna a nota sem qualquer alteração.
 * Caso contrário, calcula-se o próximo múltiplo de 5 usando Math.ceil(nota / 5) * 5.
 * Se a diferença entre o próximo múltiplo de 5 e a nota é menor que 3, a nota é 
 * arredondada para o próximo múltiplo de 5.
 * Se a diferença não é menor que 3, a nota permanece inalterada.
 * Função classificarNotas:
 * 
 * Recebe um array de notas e aplica a função arredondarNota a cada nota.
 * Verifica se a nota final é maior ou igual a 40 para determinar o status de aprovação ou reprovação.
 * Retorna um array de objetos que contém a nota original, a nota final (após arredondamento) e o status 
 * do aluno (aprovado ou reprovado).
 * Exemplos
 * Para a lista de notas [84, 29, 57, 38, 73]:
 * 
 * 84 é arredondada para 85 e o aluno é aprovado.
 * 29 permanece 29 e o aluno é reprovado.
 * 57 permanece 57 e o aluno é aprovado.
 * 38 é arredondada para 40 e o aluno é aprovado.
 * 73 é arredondada para 75 e o aluno é aprovado.
 */