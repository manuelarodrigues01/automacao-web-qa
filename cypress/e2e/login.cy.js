import LoginPage from '../support/pages/LoginPage';

describe('Funcionalidade: Login', () => {

  const timestamp = Date.now();
  const usuario = {
    nome: 'Utilizador QA',
    email: `teste_login_${timestamp}@mail.com`,
    senha: 'SenhaForte123'
  };

  before(() => {
    // Regista o utilizador uma única vez antes de rodar os testes
    cy.visit('https://automationexercise.com/login');
    cy.get('[data-qa="signup-name"]').type(usuario.nome);
    cy.get('[data-qa="signup-email"]').type(usuario.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type(usuario.senha);
    cy.get('[data-qa="first_name"]').type('QA');
    cy.get('[data-qa="last_name"]').type('User');
    cy.get('[data-qa="address"]').type('Rua Exemplo');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('Los Angeles');
    cy.get('[data-qa="zipcode"]').type('90001');
    cy.get('[data-qa="mobile_number"]').type('123456789');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('a[href="/logout"]').click();
  });

  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
    LoginPage.acessarPaginaLogin();
  });

  it('Deve realizar login com sucesso', () => {
    LoginPage.preencherLogin(usuario.email, usuario.senha);
    LoginPage.validarLoginComSucesso(usuario.nome);
  });

  it('Deve exibir mensagem de erro ao inserir credenciais inválidas', () => {
    LoginPage.preencherLogin('usuario_inexistente@mail.com', 'senhaErrada123');
    LoginPage.validarMensagemErro();
  });

});