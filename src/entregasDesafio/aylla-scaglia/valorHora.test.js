// Importações no topo do arquivo
const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');
const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

// Testes para calcularValorPorHora
describe('calcularValorPorHora', () => {
    test('Deve retornar dado o salario 1412 retorna 9 por hora', () => {
        const rendaMensal = 1412; // Define a renda mensal para o teste
        const resultado = calcularValorPorHora(rendaMensal); // Invoca a função com a renda mensal
        expect(resultado).toEqual(9); // Verifica se o resultado é o esperado
    });
});


describe('valorProjeto', () => {
    test('Deve calcular corretamente o valor do projeto para o pacote básico', () => {
        // Configuração do cenário de teste
        const horasProjeto = 40;
        const valorHora = 50;
        const pacote = 'pacote_basico';
        const taxaPacote = 1.10;  // Taxa de 10% para o pacote básico

        // Calcula o valor esperado
        const valorEsperado = horasProjeto * valorHora * taxaPacote;

        // Execução da função
        const resultado = calcularValorDoProjeto(horasProjeto, valorHora, pacote);

        // Verificação
        expect(resultado).toEqual(valorEsperado);
    });
});   