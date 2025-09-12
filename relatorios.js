import { alunos } from "./alunos.js";
import { voltaMenu } from "./voltaMenu.js";

// Lista todos os alunos
function relatorioAlunos() {
  console.log("\nRelatório de alunos:");
  alunos.forEach(a => console.log(a.nome));
  voltaMenu();
}

// Lista aprovados
function relatorioAlunosAprovados() {
  console.log("\nAlunos aprovados:");
  alunos.forEach(a => {
    const media = a.notas.reduce((acc,n)=>acc+n)/a.notas.length;
    if (media >= 7) console.log(a.nome);
  });
  voltaMenu();
}

// Lista reprovados
function relatorioAlunosReprovados() {
  console.log("\nAlunos reprovados:");
  alunos.forEach(a => {
    const media = a.notas.reduce((acc,n)=>acc+n)/a.notas.length;
    if (media < 5) console.log(a.nome);
  });
  voltaMenu();
}

// Lista em recuperação
function relatorioAlunosRecuperacao() {
  console.log("\nAlunos em recuperação:");
  alunos.forEach(a => {
    const media = a.notas.reduce((acc,n)=>acc+n)/a.notas.length;
    if (media >=5 && media <7) console.log(a.nome);
  });
  voltaMenu();
}

// Média de cada aluno
function calculaMediaALuno() {
  alunos.forEach(a => {
    const media = a.notas.reduce((acc,n)=>acc+n)/a.notas.length;
    console.log(`${a.nome}: ${media.toFixed(1)}`);
  });
  voltaMenu();
}

// Média geral da turma
function calculaMediaGeral() {
  let todasNotas = alunos.flatMap(a => a.notas);
  let media = todasNotas.reduce((acc,n)=>acc+n)/todasNotas.length;
  console.log(`Média geral da turma: ${media.toFixed(1)}`);
  voltaMenu();
}

// Aluno destaque
function calculaMaiorMedia() {
  let maiorMedia = 0;
  let destaque = '';
  alunos.forEach(a => {
    const media = a.notas.reduce((acc,n)=>acc+n)/a.notas.length;
    if (media > maiorMedia) {
      maiorMedia = media;
      destaque = a.nome;
    }
  });
  console.log(`Aluno destaque: ${destaque} (${maiorMedia.toFixed(1)})`);
  voltaMenu();
}

export { relatorioAlunos, relatorioAlunosAprovados, relatorioAlunosReprovados, relatorioAlunosRecuperacao, calculaMediaALuno, calculaMediaGeral, calculaMaiorMedia };
