const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');


// Testes para calcularPacote
describe('calcularPacote', () => {
    test("Deve retornar pacote_basico quando o total de horas por projeto é menor que 50", () => {
        const totalHorasPorProjeto = 49;
        const resultado = calcularPacote(totalHorasPorProjeto);

        expect(resultado).toEqual("pacote_basico");
    });
});
