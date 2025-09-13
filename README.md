# 📚 Gerenciador de Estudantes – Grifinória

Este projeto é um **sistema de gerenciamento de estudantes** feito em **Node.js**, que roda no **terminal**.
Ele permite cadastrar, editar e excluir estudantes, além de registrar suas notas e idades.

## ✨ Funcionalidades

* 👤 **Cadastro de estudantes** (nome e idade)
* 📝 **Cadastro de notas** individuais para cada estudante
* 📋 **Listagem de estudantes**
* 📊 **Cálculo da média** de cada aluno
* 🏆 **Aluno destaque** (maior média da turma)
* 📈 **Média da turma**
* 🔍 **Busca de estudantes por nome**
* ✅ **Listagem de aprovados, em recuperação e reprovados**
* ✏️ **Edição de dados** de um aluno já existente
* ❌ **Exclusão de estudantes**
* 🚪 **Encerramento do programa**

## 🗂️ Estrutura do Projeto

O código está dividido em **módulos** para manter a organização:

```
📦 projeto
 ┣ 📜 alunos.js       # Gerencia o cadastro, edição e exclusão de alunos
 ┣ 📜 entrada.js      # Responsável pela entrada de dados no terminal
 ┣ 📜 inicio.js       # Ponto de entrada principal do programa
 ┣ 📜 menu.js         # Exibe o menu principal e direciona as opções
 ┣ 📜 relatorios.js   # Gera relatórios (aprovados, reprovados, destaque, etc.)
 ┣ 📜 voltaMenu.js    # Controla o retorno ao menu após ações
 ┗ 📜 package.json
```

## 🚀 Como executar

1. Clone este repositório

   ```bash
   git clone https://github.com/stellag2003/MiniProjeto.git
   cd MiniProjeto

   ```

2. Instale as dependências

   ```bash
   npm install
   npm install chalk
   ```

3. Execute o programa

   ```bash
   node inicio.js
   ```

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **Readline** (para interação via terminal)
* **Chalk** (para cores no terminal)
* **Módulos nativos do JavaScript (ESM)**
