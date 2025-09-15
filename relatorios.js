import { alunos } from "./alunos.js";
import { voltaMenu } from "./voltaMenu.js";


/*
-Lista todos os alunos
-um forEach é usado para pesquisar todos os nomes existentes dentro do array de objetos alunos
-depois disso, os nomes são impressos no console, e a função voltaMenu é chamada
*/
function relatorioAlunos() {
  console.log("\nRelatório de alunos:");
  alunos.forEach(aluno => console.log(aluno.nome));
  voltaMenu();
}

/*
-Lista alunos aprovados
-um ForEach percorre o array de alunos
-dentro do ForEach, a primeira coisa a ser feita é o calculo de todas as médias dos alunos, usando o método reduce()
-depois disso há uma verificação, se a média for maior ou igual a 7, o nome desse aluno aparecerá na lista
-por fim, a função voltaMenu é chamada
*/
function relatorioAlunosAprovados() {
  console.log("\nAlunos aprovados:");
  alunos.forEach(aluno => {
    const media = aluno.notas.reduce((acc,n)=>acc+n)/aluno.notas.length;
    if (media >= 7) console.log(`${aluno.nome} - média: ${media}`);
  });
  voltaMenu();
}

/*
-Lista alunos reprovados
-um ForEach percorre o array de alunos
-dentro do ForEach, a primeira coisa a ser feita é o calculo de todas as médias dos alunos, usando o método reduce()
-depois disso há uma verificação, se a média for menor que 5, o nome e a média desse aluno aparecerá na lista
-por fim, a função voltaMenu é chamada
*/
function relatorioAlunosReprovados() {
  console.log("\nAlunos reprovados:");
  alunos.forEach(aluno => {
    const media = aluno.notas.reduce((acc,n)=>acc+n)/aluno.notas.length;
    if (media < 5) console.log(`${aluno.nome} - média: ${media}`);
  });
  voltaMenu();
}

/*
-Lista alunos em recuperação
-um ForEach percorre o array de alunos
-dentro do ForEach, a primeira coisa a ser feita é o calculo de todas as médias dos alunos, usando o método reduce()
-depois disso há uma verificação, se a média for maior ou igual a 5 e menor que 7, o nome desse aluno aparecerá na lista
-por fim, a função voltaMenu é chamada
*/
function relatorioAlunosRecuperacao() {
  console.log("\nAlunos em recuperação:");
  alunos.forEach(aluno => {
    const media = aluno.notas.reduce((acc,n)=>acc+n)/aluno.notas.length;
    if (media >=5 && media <7) console.log(`${aluno.nome} - média: ${media}`);
  });
  voltaMenu();
}

/*
-Média de cada aluno
-um ForEach percorre o array de alunos
-dentro do ForEach, a primeira coisa a ser feita é o calculo de todas as médias dos alunos, usando o método reduce()
-após o calculo, o nome de cada aluno será impresso no console, juntamente á sua média
-por fim, a função voltaMenu é chamada
*/
function calculaMediaALuno() {
  alunos.forEach(aluno => {
    const media = aluno.notas.reduce((acc,n)=>acc+n)/aluno.notas.length;
    console.log(`${aluno.nome}: ${media.toFixed(1)}`);
  });
  voltaMenu();
}

/*
-Média geral da turma
-um array vazio [] é usado como base para o concat
-o map percorre o array alunos e retorna um array com as notas de cada aluno (array de arrays)
-o spread operator (...) espalha esses arrays de notas como argumentos para o concat
 concat junta tudo em um único array com todas as notas
-depois disso, o reduce soma todas as notas e divide pelo total de notas para obter a média geral
-após o calculo, a média  da turma é impressa no console
-por fim, a função voltaMenu é chamada
*/
function calculaMediaGeral() {
  let todasNotas = [].concat(...alunos.map(aluno => aluno.notas));
  let media = todasNotas.reduce((acc,n)=>acc+n)/todasNotas.length;
  console.log(`Média geral da turma: ${media.toFixed(1)}`);
  voltaMenu();
}

/*
-Aluno destaque(com maior média)
-duas variáveis são declaradas, maiorMedia e destaque, elas serão usadas no final da função
-um ForEach percorre o array de alunos
-dentro do ForEach, a primeira coisa a ser feita é o calculo de todas as médias dos alunos, usando o método reduce()
-após o calculo, é feita uma verificação, se o retorno dessa verificação for true, as duas variáveis criadas no início do código serão reatribuidas
-nome do aluno destaque será impresso no console, juntamente á sua média
- Chama a função voltaMenu
*/
function calculaMaiorMedia() {
  let maiorMedia = 0;
  let destaque = '';
  alunos.forEach(aluno => {
    const media = aluno.notas.reduce((acc,n)=>acc+n)/aluno.notas.length;
    if (media > maiorMedia) {
      maiorMedia = media;
      destaque = aluno.nome;
    }
  });
  console.log(`Aluno destaque: ${destaque}, sua média é: (${maiorMedia.toFixed(1)})`);
  voltaMenu();
}

export { relatorioAlunos, relatorioAlunosAprovados, relatorioAlunosReprovados, relatorioAlunosRecuperacao, calculaMediaALuno, calculaMediaGeral, calculaMaiorMedia };
