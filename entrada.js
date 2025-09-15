
import readline from "readline";

/*
-aqui é criada a interface readline que será usada no sistema
-permite que o usuário digite no terminal
*/
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
