const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');
const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes');

describe('calcularValorTotalProjeto', () => {
    test('Deve calcular corretamente o valor do projeto com taxas reais', () => {
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 50;
        
        const horasProjeto = calcularHorasDeProjeto(funcionalidades);
        const pacote = calcularPacote(horasProjeto);
        const taxaPacote = TAXAS_CONTRATUAIS_POR_PACOTE[pacote];
        
        const valorBase = horasProjeto * valorHora;
        const valorEsperado = Math.round(valorBase * taxaPacote);
        
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(resultado).toEqual(valorEsperado);
    });
});




