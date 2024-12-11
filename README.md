# API de Carros - WebAPI

Esta é uma API RESTful desenvolvida para o gerenciamento de informações de carros, utilizando **Node.js** e **Express**. A API permite ler, criar, atualizar e excluir carros, com validação dos dados utiizando a biblioteca **Joi**.

Este é um projeto inicial de CRUD(Creat, Read, Update, Delete), que será expandido no futuro. este é apenas o escopo inicial.

## Funcionalidades

- **Get /**: Retorna a lista completa de carros.
- **Get /:sigla**: Retorna as informações de um carro especifico, identificado pela sigla
- **Post /**: Adiciona um carro a lista.
- **Put /:sigla**: Atualiza as informções de um carro specifico, identificado pela sigla.
- **DELETE /:sigla**: Remove um carro especifico pela sigla.

## Estrutura do projeto 

- **app.js**: Arquivo principal que configura o servidor express e as rotas da API.
- **tabelacarros.js**: Contém a lista de carros (dados ficticios)
- **validacao.js**: contém as validações joi para os dados dos carros.

## Endpoints

## 1. **get /**

Retorna a lista completa de carros disponiveis. 

### Exemplo de resposta: 

```json
[
 {
    "nome": "ferrari",
    "sigla": "FER",
    "velocidademaxima": "340",
    "potencia": "800",
    "consumo": "5.5",
    "aceleracao": "2.9",
    "preco": "300000"
 }
]
```