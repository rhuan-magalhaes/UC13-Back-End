import carros2024 from './tabelacarros.js';
import express from 'express';

import { modeloCarro, modeloAtualizacaoCarro } from './validacao.js';

const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2024);
});

app.get('/:sigla', (requisicao, resposta) => {
    const siglainformada = requisicao.params.sigla.toUpperCase();  // obtendo a sigla 
    const carro = carros2024.find((infocarro) => infocarro.sigla === siglainformada); // buscando a sigla 
    if (!carro) {
        // ! vazio not
        resposta
        .status(404)
        .send(
            'não existe um carro com a sigla informada!' // mensagem de erro
        );
    return;
    }
    resposta.status(200).send(carro); // Se encontrado a sigla retorna a resposta correta
});

app.post('/', (req, res) => {
    const novoCarro = req.body;  // Obtem o corpo enviado para incluir um carro 
    const carroExiste = carros2024.find(carro => carro.sigla === novoCarro.sigla);
    if (carroExiste) {
        return res.status(400).send('Já existe um carro cadastrado com essa sigla.');
    }
    //JOI
    const { error } = modeloCarro.validate(novoCarro);
    if ( error ){
        // Se houver erro retorna 'erro 400 (Bad Request)'
        res.status(400).send(error);
        return;
    }
    carros2024.push(novoCarro);  // Adiciona o novo carro  lista de carros 
    res.status(201).send(novoCarro);  // Retorna o carro adicionado com o status 201 (ok!).
});



app.put('/:sigla', (req, res) => {
    const siglainformada = req.params.sigla.toUpperCase(); // Obtem a sigla
    const carroSelecionado = carros2024.find(c => c.sigla === siglainformada); // busca o carro informado 
    if (!carroSelecionado) {
        res
        .status(404)
        .send(
            'Não existe um carro com a sigla informada' // mensagem de erro 
        );
        return;
    };
    // JOI
    const{ error } = modeloAtualizacaoCarro.validate(req,body);
    if (error) {
        // se houver erro o modelo/validação retorna erro
        res.status(400).send();
        return;
    }
    const campos = Object.keys(req.body); // obtem o corpo da requisição envida 
    for (let campo of campos) {
        carroSelecionado[campo] = req.body[campo]; // atualiza o carro com a informação 
    }
    res.status(200).send(carroSelecionado); // retorna a lista atualizada 
});

app.delete('/:sigla', (req, res) => {
    const siglainformada = req.params.sigla.toUpperCase(); // Obtem a sigla 
    const indiceCarroSelecionado = carros2024.findIndex(
        (c) => c.sigla === siglainformada // Busca o carro no indice da lista
    );
    if (indiceCarroSelecionado === -1) {
        // Se o carro não for encontrado/indice retorna -1
        res
        .status(404)
        .send(
            'Não existe um carro coma sigla imformada!' // Mensagem de erro
        );
    return;
    };
    const carroRemovido = carros2024.splice(indiceCarroSelecionado, 1); // Remove o carro 
    res.status(200).send(carroRemovido); // Retorna o carro removido com OK!!
});


// inicia o servidor na porta 3000:
app.listen(3000,() => console.log("Servidor rodando com sucesso"));

// node app.js
// localhost:3000/