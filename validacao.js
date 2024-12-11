// importando o joi
import joi from "joi";

// validaçao para inclusão de modelo carro 
export const modeloCarro = joi.object({
    nome: joi.string().min(3).required().messages({
        'string.min': 'O nome do carro deve ter pelo menos 3 caracteres.',
        'any.required': 'O nome do carro é Obrigatório.',
    }), // nome do carro, min. 3 caracter 
    sigla: joi.string().length(3).required().messages({
        'string.length': 'A sigla deve ter exatamente 3 caracteres',
        'any.required': 'A sigla é Obrigatória'
    }), // sigla do carro, min.3 caracter 
    velocidademaxima: joi.number().min(1).required().messages({
        'number.min': 'A velocidade maxima deve ser maior ou igaul a 1',
        'any.required': 'A velocidade maxima é obrigatória',
    }), // velocidade maxima do carro, min 1 caracter
    potencia: joi.number().min(1).required().messages({
        'number.min': 'A potência deve ser maior ou igual a 1',
        'any.required': 'A potência deve ser obrigatória',
    }), //potencia do carro, min 1 caracter
    consumo: joi.number().min(0.1).required().messages({
        'number.min': 'O consumo deve ser maior ou igual a 0.1',
        'any.required': 'O consumo é obrigatório',
    }), // consumo do carro, min 0.1 caracter 
    aceleracao: joi.number().min(0).required().messages({
        'number.min': 'A aceleração deve ser maior ou igual a 0.',
        'any.required': 'A aceleração é obrigatória',
    }), //aceleração do carro, min 0 caracter
    preco: joi.number().min(0).required().messages({
        'number.min': 'O preço deve ser maior oou iagual a 1.',
        'ny.required': 'O preço é obrigatório'
    }), // preço do carro, min 0 caracter 
});

export const modeloAtualizacaoCarro = joi.object({
    nome: joi.string().min(3), // nome do carro, Opcional
    sigla: joi.string().length(3), // sigla, Opcional
    velocidademaxima: joi.number().min(1), // velocidade maxima, Opcional
    potencia: joi.number().min(1), // potencia, Opcional
    consumo: joi.number().min(0.1), // consumo, Opcional
    aceleracao: joi.number().min(0), // aceleração, Opcional
    preco: joi.number().min(0), // Preço, opcional
    // ano: joi.number().integer().min(1886).max(new date().getfullyear())
}).min(1); // pelo menos um campo tem que ser atualizado