import {rl} from "./entrada.js";
import { menu } from "./menu.js";

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
