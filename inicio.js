import readline from "readline";
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
    }

    ];
    
    function menuAlunos(){ // essa função cria o menu
        console.log('......................................................');
        console.log('....Seja bem-vindo(a) ao Consulta Aluno Grifinória....');
        console.log('......................................................');
        console.log('........................--Menu--......................');
        console.log('...Escolha um número e acesse um de nossos serviços...');
        console.log('......................................................');
        console.log('1- Cadastrar novo bruxo-estudante');
        console.log('2- Relatório de bruxos-estudantes');
        console.log('3- Buscar bruxo-estudante');
        console.log('4- Ver média individual de cada bruxo-estudante');
        console.log('5- Ver média geral da turma');
        console.log('6- Aluno Destaque da Casa Grifinória');
        console.log('7- Lista de bruxos-estudantes aprovados');
        console.log('8- Lista de bruxos-estudantes reprovados');
        console.log('9- Lista de bruxos-estudantes em recuperação');
        console.log('0- Encerrar programa mágico');
        console.log('......................................................');
        console.log('......................................................');
        console.log('......................................................');
    }

    function relatorioAlunos(){ // imprime todos os nomes dos alunos 
      console.log('..........Relatório Alunos Grifinória...............');

         alunos.forEach(aluno=> {
            
             console.log(aluno.nome);
             
         });

      console.log('....................................................');
        
    }

    function cadastraAlunos(){ // essa função cadastra, ela pede o nome do aluno, idade e notas
        rl.question('Por favor, digite o nome do novo bruxinho(a) para o cadastro! ', (resposta) => {

            const alunoNovo = {};
            alunos.push(alunoNovo);
            alunoNovo.nome = resposta;
            console.log(alunos);
            
             rl.question(' Agora digite a idade do novo bruxinho(a)! ', (idade) =>{

                    alunoNovo.idade = idade;
                    //console.log(`Lista de idade atualizada ${idadeAlunos}`);
                    console.log(alunos);

                    // for (let i = 0; i < 4; i++) {

                    //      rl.question(' Agora digite 4 notas do novo bruxinho(a)! ', (nota) =>{

                    //         alunoNovo.notas = [nota][i];
                               
                    //     });

                    // }
                    // console.log(alunoNovo.notas);

                    // alunoNovo.notas = [];
             
            });
    
        });
        
    }

    function inicio() // essa função chama a menuAlunos() e logo depois pega o número que o usuário digitou
    {
        menuAlunos();
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
                menuAlunos();
                break;
        
            default:
                break;
        }


        });

        
    }

    inicio(); // aqui a função é chamada
    




