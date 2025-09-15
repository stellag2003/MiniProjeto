import {rl} from "./entrada.js";
import { menu } from "./menu.js";

/*
-Volta para o menu
-é pedido ao usuário que ele aperte v para voltar ao menu
-depois disso é verificado se a resposta foi mesmo v
-a resposta é convertida para minúscula com o método toLowerCase(), permitindo aceitar tanto 'v' quanto 'V'
-se a resposta for diferente, como um número, ou caractere, ou outra letra, é mostrada uma mensagem de erro, e a função é chamada novamente
-após as verificações validadas, a função menu é chamada, e o usuáio é redirecionado para o menu
*/
function voltaMenu() {
  rl.question("Digite v para voltar ao menu: ", (resposta) => {
    if (resposta.toLowerCase() === 'v') menu();
    else {
      console.log("Opção inválida!");
      voltaMenu();
    }
  });
}

export { voltaMenu };
