# API REST com Node.js, TypeScript, Prisma, Express e MongoDB

<div align="center">
  <img src="https://github.com/DevJoaoPeu/API_REST/blob/main/public/Captura%20de%20Tela%20(4).png" width="400" height="auto" alt="img1"/>
  <img src="https://github.com/DevJoaoPeu/API_REST/blob/main/public/Captura%20de%20Tela%20(5).png" width="400" height="auto" alt="img2"/>
  <img src="https://github.com/DevJoaoPeu/API_REST/blob/main/public/Captura%20de%20Tela%20(6).png" width="400" height="auto" alt="img3"/>
  <img src="https://github.com/DevJoaoPeu/API_REST/blob/main/public/Captura%20de%20Tela%20(7).png" width="400" height="auto" alt="img4"/>
  <img src="https://github.com/DevJoaoPeu/API_REST/blob/main/public/Captura%20de%20Tela%20(8).png" width="400" height="auto" alt="img5"/>
</div>

Este projeto é uma API REST desenvolvida com Node.js, TypeScript, Prisma, Express e MongoDB. A API oferece rotas CRUD para interagir com recursos, como usuários, produtos ou qualquer outro dado que você queira gerenciar. Além disso, o projeto demonstra o uso de conceitos de Programação Orientada a Objetos (POO) para organizar o código de maneira modular.

## Requisitos

- Node.js 
- npm ou yarn
- MongoDB (instância local ou remota)

## Configuração do Projeto

1. Clone este repositório:

```
git clone https://github.com/DevJoaoPeu/API_REST
```

2. Acesse o diretório do projeto:

```
cd API_REST
```

3. Instale as dependências:

```
npm install
# ou
yarn install
```
4. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias, como as configurações de conexão com o banco de dados MongoDB.

```
DATABASE_URL=url de conexão do banco
```

5. Para iniciar o servidor de desenvolvimento, execute:

```
npm run dev
# ou
yarn dev
```

## Rotas

A API oferece as seguintes rotas:

- POST /createPosts: Cria um novo post.
- POST /createUsers: Cri um novo usuário.
- GET /listPost/:id: Retorna o post do id.
- PUT /updateList/:id: Atualiza o post do id.
- DELETE /deletePost/:id: Remove um post pelo ID.
