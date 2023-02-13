<h1 align="center">
	foodExplorer - Frontend
</h1>

<h3 align="center">
	A aplicação desenvolvida é um cardápio digital para um restaurante fictício, conhecido como foodExplorer.
</h3>

<p align="center">
	<a href="#about">About</a> •
	<a href="#tech-stack">Tech Stack</a> •
	<a href="#installation">Installation</a> •
	<a href="#usage">Usage</a> •
	<a href="#previews">Previews</a> 
</p>

## About
Critérios de avaliação.

- [x]  Atende a todas as especificações na Descrição da Aplicação.
- [x]  Um projeto estruturado, com uma boa organização das pastas, divisão de componentes no front-end, etc.
- [x]  Os dados do admin, do restaurante e dos usuários serão armazenados em um banco de dados.
- [x]  Os usuários deverão se autenticar para entrar na aplicação através da tela de login, utilizando autenticação JWT. A autenticação deve ser validada com senha.
- [x]  Funções, variáveis, classes, arquivos, tabelas e todos os outros elementos do código devem ter nomes significativos, de acordo com as boas práticas no mercado;
- [x]  Usuário e admin podem fazer uma busca pelo nome do prato;
- [x]  O admin irá fazer upload de imagens para cadastrar os pratos.
- [x]  A aplicação deve ser responsiva, de acordo com o conceito Mobile First que foi aprendido em aula e seguindo o modelo do Figma;
- [x]  O repositório deverá conter um README bem detalhado tanto no back-end quanto no front-end com link do deploy, previews e instruções para a execução do projeto.
- [x]  Use os conceitos aprendidos em aula sobre animações e inclua transições e transformações (entre outros exemplos) para deixar a experiência da aplicação mais fluida.
- [x]  A sua aplicação deverá consumir a sua própria API;,
- [x]  Faça o deploy da sua aplicação (front-end e back-end)
- [x]  Atende ao modelo proposto no Figma e contém elementos indicativos de ação e estado

## Tech Stack
<img src="https://img.shields.io/badge/Javascript-05122A?style=flat&logo=javascript" alt="javascript Badge" height="25">&nbsp;
<img src="https://img.shields.io/badge/React-05122A?style=flat&logo=react" alt="react Badge" height="25">&nbsp;

## Installation

A aplicação e composta por 2 partes, back-end e front-end use os seguintes comandos para a aplicação rodar.

To Install this project, follow the steps above:
```bash
// back-end
git clone https://github.com/karinewagner/Foodexplorer-Backend.git
// front-end
git clone https://github.com/karinewagner/Foodexplorer-Frontend.git
```

## Usage

To use this project, follow the steps above:
```bash
// rodar o back-end
$ npm install
$ npx knex migrate:latest
$ npx knex seed:run
// rodar o servidor
$ npm run dev
// usuario adm
email: admin@teste.com
senha: teste123
// rodar o front-end
// intalar todas as dependências 
npm install 
// rodar o front da aplicação
npm run dev
```

## Previews

![preview](./.github/previews-login.png)
![preview](./.github/previews.png)
