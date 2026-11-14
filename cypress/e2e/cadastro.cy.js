import CadastroPage from '../support/pages/CadastroPage';

describe('Funcionalidade: Registo de Novo Utilizador', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com/login');
  });

  it('Deve registar um novo utilizador com sucesso', () => {
    const timestamp = Date.now();
    const usuario = {
      nome: 'Utilizador QA',
      email: `teste_qa_${timestamp}@mail.com`,
      senha: 'SenhaForte123' // Adiciona a senha aqui para evitar o 'undefined'
    };

    // 1. Preenche todo o formulário passando o objeto completo
    CadastroPage.preencherFormularioCompleto(usuario);

    // 2. Valida se a conta foi criada com sucesso
    CadastroPage.validarCadastroComSucesso();
  });

});