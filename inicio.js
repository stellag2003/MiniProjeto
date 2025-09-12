import { log } from "console";
import readline from "readline";
import chalk from 'chalk';

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
    });

    const alunos = [ // esse é um array de objetos, cada aluno é um objeto     
    {
        nome: 'Harry Potter',
        idade: 15,
        notas: [10,8,7,6],
    },

    {
        nome: 'Ronald Weasley',
        idade: 16,
        notas: [5,8,4,9],
    },

    {
        nome:'Hermione Granger',
        idade: 15,
        notas: [10,10,10,8],
    },

    {
        nome: 'Dino Thomas',
        idade: 14,
        notas: [10,8,8,10]
    },

    {
        nome: 'Parvati Patil',
        idade: 15,
        notas: [9,6,7,10]
    },

    {
        nome: 'Padma Patil',
        idade: 15,
        notas: [10,6,8,10]
    },

    {
        nome: 'Neville Longbottom',
        idade: 15,
        notas: [5,4,8,3]
    },

    {
        nome: 'Lilá Brown',
        idade: 16,
        notas: [3,8,5,4]
    },

    {
        nome: 'Simas Finnigan',
        idade: 15,
        notas: [4,1,3,2]
    },

    ];

    function cadastraAlunos(){ // essa função cadastra, ela pede o nome do aluno, idade e notas

        console.log("\n");

        rl.question('Por favor, digite o nome do novo bruxinho(a) para o cadastro! ', (resposta) => {

            if(!/^[A-Za-zÀ-ÿ\s]+$/.test(resposta) || resposta.length < 3)
            {
                 console.log('Digite um nome válido');
                 cadastraAlunos();

            }
            else{

                const alunoNovo = {};
                alunos.push(alunoNovo);
                alunoNovo.nome = resposta;
                alunoNovo.idade = 0;
                alunoNovo['notas'] = [];
                
                rl.question('Agora digite a idade do novo bruxinho(a)! ', (idade) =>{

                    if(idade > 16 || idade < 14)
                    {
                        console.log("Digite uma idade válida");
                        cadastraAlunos();
                    }
                    else{
                        alunoNovo.idade = idade;
                    }

                       pedirNota(0);

                });

                       //voltaMenu();
                       function pedirNota(i) { // função para pedir 4 notas

                            if (alunoNovo.notas.length >= 4) { // já pediu 4 notas
                                console.log("Aluno cadastrado!");
                                console.log(alunos);
                                voltaMenu();
                            }

                            rl.question(`Digite a nota ${i + 1}: `, (nota) => {
                                if(nota < 0 || nota > 10 || !/^\d+(\.\d+)?$/.test(nota)) // /^\d+(\.\d+)?$/ é uma expressão usada para verificar se a nota só contém números
                                {
                                    console.log("Digite uma nota válida!")
                                    pedirNota(0);
                                }
                                else{
                                    alunoNovo.notas.push(Number(nota)); // adiciona a nota ao array
                                    pedirNota(i + 1); // chama novamente para a próxima nota

                                }
                               
                            });

                            
                        }
                       
                
    

            }
            voltaMenu();

            
        });
        
    }

    function relatorioAlunos(){ // imprime o nome de todos os alunos 

      console.log("\n");

      console.log('..........Relatório Alunos Grifinória...............');

         alunos.forEach(aluno=> {
            
             console.log(aluno.nome);
             
         });

      console.log('....................................................');
      console.log("\n");

      voltaMenu();
      
        
    }

    function buscaAluno(){ // busca o nome do aluno, baseado na resposta que o usuário digitar no terminal

        console.log("\n");

        rl.question("Digite o nome do bruxo-aluno que deseja pesquisar", nome =>{
            
           if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) { // !/^[A-Za-zÀ-ÿ\s]+$/ é uma expressão usada para verificar se a resposta contem apenas letras
                console.log('Digite um nome válido');
                menu();
            }
            else{
                const alunoEncontrado = alunos.find(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase()));
    
                if(alunoEncontrado)
                {
                    console.log(`Aluno encontrado: ${alunoEncontrado.nome}`);
                }
                else{
                    console.log('Aluno não encontrado ):');

                }
            }
            voltaMenu();

            
        });
        
    }

    function calculaMediaGeral(){ // calcula a média geral de notas da turma

        console.log("\n");

        let todasNotas = []; // array vazio para acumular todas as notas

        for (let aluno of alunos) { // esse for of acessa o array alunos, pega todas as chaves notas e cria um novo array, só com as notas dos alunos

            todasNotas = todasNotas.concat(aluno.notas);

        }

        let resultado = todasNotas.reduce((acumulador, atual) => atual + acumulador, 0) // soma de todas as notas

        let mediaGeral = resultado / todasNotas.length;
        console.log(`A média geral da turma é: ${mediaGeral.toFixed(1)}`);

        voltaMenu();
       
    }

    function calculaMediaALuno() // calcula a média individual dos alunos
    {
        console.log("\n");

        for( let aluno of alunos)
        {
            const soma = aluno.notas.reduce((acum, atual) => acum + atual);
            const mediaIndividual = soma / aluno.notas.length;

            console.log(`A média geral de ${aluno.nome} é ${mediaIndividual}`);
        }
        voltaMenu();

    }

    function calculaMaiorMedia() // calcula a maior média entre os alunos
    {
        console.log("\n");

        let maiorMedia = 0;
        let nomeAlunoMaiorMedia = '';

        for( let aluno of alunos)
        {
            const soma = aluno.notas.reduce((acum, atual) => acum + atual);
            const mediaIndividual = soma / aluno.notas.length;
            
            if( mediaIndividual > maiorMedia)
                {
                    maiorMedia = mediaIndividual;
                    nomeAlunoMaiorMedia = aluno.nome; 
                }
                   
            }
            
            console.log(`O(a) aluno(a) que tem a maior média é: ${nomeAlunoMaiorMedia}, e sua média é: ${maiorMedia}`);
            voltaMenu();

    }

    function relatorioAlunosAprovados(){ // relatório de alunos com notas > 7

        console.log("\n");

         for( let aluno of alunos)
        {
            const soma = aluno.notas.reduce((acum, atual) => acum + atual);
            const mediaIndividual = soma / aluno.notas.length;
        
            if(mediaIndividual >= 7)
            {
                console.log(aluno.nome)

            }
        }
        voltaMenu();

    }

    function relatorioAlunosReprovados(){ // relatório de alunos com notas < 5

        console.log("\n");

        for( let aluno of alunos)
        {
            const soma = aluno.notas.reduce((acum, atual) => acum + atual);
            const mediaIndividual = soma / aluno.notas.length;
        
            if(mediaIndividual < 5)
            {
                console.log(aluno.nome)

            }
        }
        voltaMenu();

    }

    function relatorioAlunosRecuperacao(){ // rela´torio de alunos com notas entre 5 e 6.9

        console.log("\n");

         for( let aluno of alunos)
        {
            const soma = aluno.notas.reduce((acum, atual) => acum + atual);
            const mediaIndividual = soma / aluno.notas.length;
        
            if(mediaIndividual >= 5 && mediaIndividual <= 6.9)
            {
                console.log(aluno.nome)

            }
    
        }
        voltaMenu();

    }

    function voltaMenu()
    {
        rl.question("Digite v para voltar ao menu ", (resposta) => {
        if(resposta === 'v' || resposta === 'V')
        {
            menu();

        }
        else{
            console.log('Digite uma opção válida!')
            voltaMenu();
        }
                         
        })

    }

    function deletaAluno() //deleta aluno pelo nome
    {
        rl.question("Digite o nome do aluno a ser deletado:", nome=>
        {
            
            const index = alunos.findIndex(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase()));

            alunos.splice(index, 1); // remove 1 elemento na posição encontrada
            console.log("Aluno deletado com sucesso");
            relatorioAlunos();
            voltaMenu();
        }) 

        
    }

    function menu() // essa função chama a menuAlunos() e logo depois pega o número que o usuário digitou
    {
            console.log(chalk.redBright('......................................................'));
            console.log(chalk.yellowBright('.........Seja bem-vindo(a) ao ') + chalk.redBright('Notas e Feitiços') + chalk.yellowBright('........'));
            console.log(chalk.redBright('......................................................'));

            console.log(chalk.magentaBright('........................--Menu--......................'));
            console.log(chalk.cyanBright('...Escolha um número e acesse um de nossos serviços...'));
            console.log(chalk.redBright('......................................................'));

            console.log(chalk.greenBright('1- Cadastrar novo bruxo-estudante'));
            console.log(chalk.greenBright('2- Relatório de bruxos-estudantes'));
            console.log(chalk.greenBright('3- Buscar bruxo-estudante'));
            console.log(chalk.greenBright('4- Ver média individual de cada bruxo-estudante'));
            console.log(chalk.greenBright('5- Ver média geral da turma'));
            console.log(chalk.greenBright('6- Aluno Destaque da Casa Grifinória'));
            console.log(chalk.greenBright('7- Lista de bruxos-estudantes aprovados'));
            console.log(chalk.greenBright('8- Lista de bruxos-estudantes reprovados'));
            console.log(chalk.greenBright('9- Lista de bruxos-estudantes em recuperação'));

            console.log("\n");
            console.log(chalk.cyanBright('**Serviços Extras**'));
            console.log(chalk.greenBright('D- Deletar bruxo-estudante'));
            console.log(chalk.greenBright('A- Atualizar bruxo-estudante'));

            console.log(chalk.red('0- Encerrar programa mágico'));

            console.log(chalk.redBright('......................................................'));
            console.log(chalk.redBright('......................................................'));
            console.log(chalk.redBright('......................................................'));


            rl.question("Digite o número da opção ", (resposta) =>{

            switch (resposta) { // aqui o swith verifica qual o número e executa funções diferentes, de acordo com a resposta
            case '0':
                console.log('Programa encerrado, Hogwartes agradece seu acesso!');
                break;

            case '1':
                cadastraAlunos();
                break;

            case '2':
                relatorioAlunos();
                break;

            case '3':
                buscaAluno();
                break;

            case '4':
                calculaMediaALuno();
                break;
        
            case '5':
                calculaMediaGeral();
                break;

            case '6':
                calculaMaiorMedia();
                break;

            case '7':
                relatorioAlunosAprovados();
                break;

            case '8':
                relatorioAlunosReprovados();
                break;

            case '9':
                relatorioAlunosRecuperacao();
                break;

            case 'd'.toLowerCase():
                deletaAluno();
                break;

            default:
                console.log('Opção inválida, tente novamente!')
                break;
            }

        // if(resposta !== '0')
        //     menu();

        // });

        
    });

    }
    menu(); // aqui a função é chamada
    




