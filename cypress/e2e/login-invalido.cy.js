describe('Cenários Negativos - Login de Utilizador', () => {
  Cypress.on('uncaught:exception', () => false);

  beforeEach(() => {
    // Visita a página de login antes de cada teste
    cy.visit('https://automationexercise.com');
    cy.get('a[href="/login"]').click({ force: true });
  });

  it('Deve exibir mensagem de erro ao tentar login com palavra-passe incorreta', () => {
    cy.get('[data-qa="login-email"]').type('utilizadora_teste@test.com');
    cy.get('[data-qa="login-password"]').type('SenhaIncorreta123');
    cy.get('[data-qa="login-button"]').click({ force: true });

    // Validar a mensagem de erro exibida pelo site
    cy.get('.login-form form p')
      .should('be.visible')
      .and('contain', 'Your email or password is incorrect.');
  });

  it('Deve exibir mensagem de erro ao tentar login com e-mail não registado', () => {
    const emailNaoExistente = `nao_existe_${Date.now()}@test.com`;

    cy.get('[data-qa="login-email"]').type(emailNaoExistente);
    cy.get('[data-qa="login-password"]').type('SenhaQualquer123');
    cy.get('[data-qa="login-button"]').click({ force: true });

    // Validar a mensagem de erro
    cy.get('.login-form form p')
      .should('be.visible')
      .and('contain', 'Your email or password is incorrect.');cy.get('p', { timeout: 10000 }).should('be.visible').and('contain', 'Sua mensagem de erro aqui')
  });
});