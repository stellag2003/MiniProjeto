import readline from "readline";
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
    });

    const alunos = ['Harry', 'Rony', 'Hermione', 'Simas', 'Dino', 'Parvati', 'Padma', 'Neville'];
    const idadeAlunos = [15,16,15,14,16,15,15,14];
    const notas = [[10,8,7,6], [5,8,4,9], [10,10,10,8], [6,5,8,4], [10,8,8,10], [10,8,8,10], [7,9,8,9]];

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

    function cadastraAlunos(){ // essa função cadastra, ela pede o nome do aluno, idade e notas
        rl.question('Por favor, digite o nome do novo bruxinho(a) para o cadastro! ', (resposta) => {

            alunos.push(resposta);
            console.log(`Lista Atualizada ${alunos}`);
            

             rl.question(' Agora digite a idade do novo bruxinho(a)! ', (idade) =>{

                    idadeAlunos.push(idade);
                    console.log(`Lista de idade atualizada ${idadeAlunos}`);


            rl.question(' Agora digite 4 notas do novo bruxinho(a)! ', (nota) =>{

                notas.push(nota);
                console.log(`Lista de notas atualizada ${notas}`);

                
            });

                
            });

            
        
        });

        
    }

    function inicio() // essa função chama a menuAlunos() e logo depois pega o número que o usuário digitou
    {
        menuAlunos();
        rl.question("Digite o número da opção ", (resposta) =>{

            switch (resposta) { // aqui o swith verifica qual o número e executa funções diferentes, de acordo com a resposta
            case '1':
                cadastraAlunos();
                break;
        
            default:
                break;
        }


        });

        
    }

    inicio(); // aqui a função é chamada
    




