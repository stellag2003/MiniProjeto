import chalk from 'chalk';
import {rl} from "./entrada.js";
import { cadastraAlunos, deletaAluno, atualizaAluno, buscaAluno } from './alunos.js';
import { relatorioAlunos, calculaMediaALuno, calculaMediaGeral, calculaMaiorMedia, relatorioAlunosAprovados, relatorioAlunosReprovados, relatorioAlunosRecuperacao } from './relatorios.js';

export function menu(){
    console.log(chalk.yellowBright("===== Menu Notas e Feitiços ====="));
    console.log(chalk.greenBright("1 - Cadastrar novo aluno"));
    console.log("2 - Relatório de alunos");
    console.log("3 - Buscar aluno");
    console.log("4 - Média individual");
    console.log("5 - Média geral");
    console.log("6 - Aluno destaque");
    console.log("7 - Aprovados");
    console.log("8 - Reprovados");
    console.log("9 - Recuperação");
    console.log(chalk.greenBright("D - Deletar aluno"));
    console.log(chalk.greenBright("A - Atualizar aluno"));
    console.log(chalk.redBright("0 - Sair"));

    
    rl.question("Escolha uma opção: ", resposta => {
        switch(resposta.toLowerCase()){
            case '0': console.log("Programa encerrado!"); rl.close(); break;
            case '1': cadastraAlunos(); break;
            case '2': relatorioAlunos(); break;
            case '3': buscaAluno(); break;
            case '4': calculaMediaALuno(); break;
            case '5': calculaMediaGeral(); break;
            case '6': calculaMaiorMedia(); break;
            case '7': relatorioAlunosAprovados(); break;
            case '8': relatorioAlunosReprovados(); break;
            case '9': relatorioAlunosRecuperacao(); break;
            case 'd': deletaAluno(); break;
            case 'a': atualizaAluno(); break;
            default: console.log("Opção inválida!"); menu(); break;
        }
    });
}
