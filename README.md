

# Descrição do projeto

O objetivo do projeto foi desenvolver um serviço de criação e consumo de APIs Rest para listar, cadastrar e deletar registro de entregas, atendendo os seguimtes requisitos:

- Lista as entregas salvas no banco de dados;
- Cadastrar novas entregas no formulário,atualizar o banco e a lista com os novos dados;
- Excluir uma entrega, removendo-a do bano de dados e da lista.

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [MySQL](https://mysql.com)
- [Sequelize ORM](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)

---

### Como iniciar o projeto

- Ambiente de desenvolvimento:

```


npm start
```

O projeto estará disponível em <http://localhost:8080>

---

# Lista de entregas GET

http://localhost:8080/deliveries/


* response

```
[
  {
    "id": 1,
    "nome": "Danielle Rodrigues",
    "peso": 23,
    "endereco": "Francisca",
    "telefone": "999999",
    "createdAt": "2021-11-24T19:40:32.000Z",
    "updatedAt": "2021-11-24T19:40:32.000Z"
  },
  {
    "id": 2,
    "nome": "Lívia Rodrigues",
    "peso": 29,
    "endereco": "Francisca",
    "telefone": "999999",
    "createdAt": "2021-11-24T19:45:58.000Z",
    "updatedAt": "2021-11-24T19:45:58.000Z"
  },
  {
    "id": 3,
    "nome": "Isabelly Rodrigues",
    "peso": 23,
    "endereco": "Francisca",
    "telefone": "999999",
    "createdAt": "2021-11-24T19:46:14.000Z",
    "updatedAt": "2021-11-24T19:46:14.000Z"
  }
]

```

# Criando cadastro de entregas POST

http://localhost:8080/deliveries/

* input

```
{		
		"nome": "Danielle Rodrigues",
    "peso": 23,
    "endereco": "Francisca",
    "telefone": "999999"
}

* response

```
{
  "id": 1,
  "nome": "Danielle Rodrigues",
  "peso": 23,
  "endereco": "Francisca",
  "telefone": "999999",
  "updatedAt": "2021-11-24T19:40:32.534Z",
  "createdAt": "2021-11-24T19:40:32.534Z"
}

```

# Deletando cadastro de entregas DELETE

http://localhost:8080/deliveries/:id

* response

```
- Retorna status code 202
