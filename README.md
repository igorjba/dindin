# Sistema de Controle Financeiro Pessoal

Este projeto tem como objetivo auxiliar os usuários a gerenciar suas finanças pessoais, oferecendo um panorama geral das transações realizadas, sejam elas entradas ou saídas.

## 🖥️ Visualização

O projeto não foi feito para ser responsivo. A resolução ideal para visualização é 1440x1024.

## 🛠️ Repositórios

- Frontend: [https://github.com/igorjba/dindin](https://github.com/igorjba/dindin)
- Backend: [https://github.com/igorjba/dindin-backend](https://github.com/igorjba/dindin-backend)

## Recursos

A aplicação inclui as seguintes funcionalidades:

- **Cadastro do usuário**
- **Login de usuário**
- **Logout de usuário**
- **Cadastro de uma nova transação**
- **Edição de uma transação**
- **Exclusão de uma transação**
- **Listagem de transações**
- **Resumo das transações**
- **Ordenar a tabela por data**
- **Filtrar a tabela por categoria**
- **Editar perfil de usuário**

## Como rodar na sua máquina

### Pré-requisitos:

1. Ter o [Node.js](https://nodejs.org/en/download/) instalado em sua máquina.
2. [Git](https://git-scm.com/downloads) (para clonar o repositório).

### Rodando o Backend:

1. Clone o repositório backend:
   ```bash
   git clone https://github.com/igorjba/dindin-backend.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd dindin-backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o servidor:
   ```bash
   npm run dev
   ```

### Acessando o Frontend:

O frontend do projeto já está hospedado na Vercel e pode ser acessado diretamente através deste link:
[https://dindin-psi.vercel.app/](https://dindin-psi.vercel.app/)

Certifique-se de que o backend está rodando localmente para que o frontend possa se comunicar com ele sem problemas.

## Dependências

### Backend:

- **Express**: Framework web para Node.js
- **date-fns**: Biblioteca para manipulação de datas em JavaScript
- **Nodemon (dev)**: Utilitário que monitora as alterações no código e reinicia automaticamente o servidor

### Frontend:

- **React**: Biblioteca JavaScript para construir interfaces de usuário
- **React DOM**: Biblioteca para renderização do DOM com React
- **axios**: Cliente HTTP para realizar requisições
- **date-fns**: Biblioteca para manipulação de datas em JavaScript
- **react-input-mask**: Componente de máscara de entrada para React
- **react-number-format**: Componente para formatar números em React
- **react-router-dom**: Biblioteca de roteamento para React
- **Vite (dev)**: Ferramenta de build que visa fornecer um ambiente de desenvolvimento mais rápido
