const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

// Testes para calcularHorasDeProjeto
describe("calcularHorasDeProjeto", () => {
    test("Calcula horas de projeto corretamente com várias funcionalidades", () => {
        const listaDeFuncionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "formulario",
        ];
        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(resultado).toEqual(64);
    });
});