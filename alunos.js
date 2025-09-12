import { rl } from "./entrada.js";
import { voltaMenu } from "./voltaMenu.js";
import { relatorioAlunos } from "./relatorios.js";

/* 
-É um array de objetos
-cada aluno é um objeto, que possui nome, idade e um array de notas
*/
const alunos = [
    { nome: 'Harry Potter', idade: 15, notas: [10, 8, 7, 6] },
    { nome: 'Ronald Weasley', idade: 16, notas: [5, 8, 4, 9] },
    { nome: 'Hermione Granger', idade: 15, notas: [10, 10, 10, 8] },
    { nome: 'Dino Thomas', idade: 14, notas: [10, 8, 8, 10] },
    { nome: 'Parvati Patil', idade: 15, notas: [9, 6, 7, 10] },
    { nome: 'Padma Patil', idade: 15, notas: [10, 6, 8, 10] },
    { nome: 'Neville Longbottom', idade: 15, notas: [5, 4, 8, 3] },
    { nome: 'Lilá Brown', idade: 16, notas: [3, 8, 5, 4] },
    { nome: 'Simas Finnigan', idade: 15, notas: [4, 1, 3, 2] },
];

/* 
-Cadastra novo aluno, pede nome, idade e 4 notas
-pega o nome que o usuário digitar, usando readline
-o nome só é cadastrado, se ele não existir no array alunos
-o usuário não consegue adicionar um nome que seja menor que 3 caracteres
-o usuário não consegue adicionar números ao invés de um nome
-a idade não pode ser menor que 14 ou maior que 16
-a idade também não pode ser uma string
-as notas não podem ser menores que 0, ou maiores que 10
-quando o usuário termina de cadastrar as notas, o objeto alunos é impresso no console
*/
function cadastraAlunos() {
    console.log("\n");
    rl.question('Digite o nome do novo bruxinho: ', (resposta) => {

        if (alunos.includes(resposta)) {
            console.log('Esse aluno já está cadastrado, tente novamente!')
            cadastraAlunos();
        }

        else {

            if (!/^[A-Za-zÀ-ÿ\s]+$/.test(resposta) || resposta.length < 3) {
                console.log('Nome inválido!');
                return cadastraAlunos();
            }

            const alunoNovo = { nome: resposta, idade: 0, notas: [] };

            rl.question('Digite a idade: ', (idade) => {
                if (idade < 14 || idade > 16) {
                    console.log('Idade inválida!');
                    return cadastraAlunos();
                }
                else{
                    alunoNovo.idade = Number(idade);
                    pedirNota(0, alunoNovo);
                    alunos.push(alunoNovo);
                }
               
            });


            function pedirNota(i, aluno) {
                if (i >= 4) {
                    console.log("Aluno cadastrado!");
                    console.log(alunos);
                    return voltaMenu();
                }

                rl.question(`Digite a nota ${i + 1}: `, (nota) => {
                    if (nota < 0 || nota > 10) {
                        console.log("Nota inválida!");
                        return pedirNota(i, aluno);
                    }
                    aluno.notas.push(Number(nota));
                    pedirNota(i + 1, aluno);
                });
            }
        }
    });
}

/*
- Deleta aluno
-pede o nome do aluno a ser deletado
-caso o nome não exista, aparece uma mensagem de erro no console e a função é chamada novamente
-caso o nome exista, o nome é deletado e a lista de nomes é exibida 
*/
function deletaAluno() {
    rl.question("Digite o nome do aluno a ser deletado: ", nome => {
        const index = alunos.findIndex(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase()));

        if (index === -1) {
            console.log("Aluno não encontrado! Nenhum aluno foi deletado.");
            deletaAluno();
        } else {
            alunos.splice(index, 1);
            console.log("Aluno deletado com sucesso!");
             relatorioAlunos();
             voltaMenu();
        }
 
    });
}


/*
- Atualiza aluno
-primeiro pergunta ao usuário o aluno que ele deseja atualizar
-se o nome desse aluno não for encontrado dentro do array alunos, aparece uma mensagem de erro no console, e a função é chamada novamente
-se o nome for encontrado, há uma verificação do que o usuário digitou, se for um número por exemplo, é exibida uma mensagem de erro, e a função é chamada de novo
-se a resposta do usuário for menor que 3 caracteres, no console também vai aparecer
-depois dessas verificações, o nome é adicionado
-a idade não pode ser menor que 14 ou maior que 16
-a idade também não pode ser uma string
-as notas não podem ser menores que 0, ou maiores que 10
-quando o usuário termina de cadastrar as notas, o objeto alunos é impresso no console
*/
function atualizaAluno() {
    rl.question("Digite o nome do aluno que deseja atualizar: ", (nome) => {
        const alunoEncontrado = alunos.find(a => a.nome.toLowerCase().includes(nome.toLowerCase()));
        if (!alunoEncontrado) {
            console.log("Aluno não encontrado!");
            return voltaMenu();
        }
        rl.question("Digite o novo nome: ", (novoNome) => {
            if (!/^[A-Za-zÀ-ÿ\s]+$/.test(novoNome) || novoNome.length < 3) {
                console.log("Nome inválido!");
                return atualizaAluno();
            }
            alunoEncontrado.nome = novoNome;

            rl.question("Digite a nova idade: ", (novaIdade) => {
                if (novaIdade < 14 || novaIdade > 16) {
                    console.log("Idade inválida!");
                    return atualizaAluno();
                }
                else{
                    alunoEncontrado.idade = Number(novaIdade);
                    alunoEncontrado.notas = [];
                    pedirNotaAtualizacao(0, alunoEncontrado);

                }
              
            });
        });
    });

    function pedirNotaAtualizacao(i, aluno) {
        if (i >= 4) {
            console.log("Aluno atualizado!");
            console.log(alunos);
            return voltaMenu();
        }
        rl.question(`Digite a nota ${i + 1}: `, (nota) => {
            if (nota < 0 || nota > 10) {
                console.log("Nota inválida!");
                return pedirNotaAtualizacao(i, aluno);
            }
            aluno.notas.push(Number(nota));
            pedirNotaAtualizacao(i + 1, aluno);
        });
    }
}

// Busca aluno
function buscaAluno() {
    rl.question("Digite o nome do aluno que deseja pesquisar: ", (nome) => {
        const alunoEncontrado = alunos.find(a => a.nome.toLowerCase().includes(nome.toLowerCase()));
        if (alunoEncontrado) {
            console.log(`Aluno encontrado: ${alunoEncontrado.nome}`);
        } else {
            console.log("Aluno não encontrado!");
        }
        voltaMenu();
    });
}

export { alunos, cadastraAlunos, deletaAluno, atualizaAluno, buscaAluno };
