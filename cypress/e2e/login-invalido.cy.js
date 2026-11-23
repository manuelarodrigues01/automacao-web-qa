describe('Cenários negativos - login de utilizador', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/login');
  });

  it('Deve exibir mensagem de erro ao tentar login com e-mail não registado', () => {
    cy.get('[data-qa="login-email"]').type('naoexiste@exemplo.com');
    cy.get('[data-qa="login-password"]').type('senhaqualquer123');
    cy.get('[data-qa="login-button"]').click();

    cy.contains('p', 'Your email or password is incorrect!', { timeout: 10000 })
      .should('be.visible');
  });

  it('Deve exibir mensagem de erro ao tentar login com senha incorreta', () => {
    cy.get('[data-qa="login-email"]').type('emailvalido@exemplo.com');
    cy.get('[data-qa="login-password"]').type('senhaerrada123');
    cy.get('[data-qa="login-button"]').click();

    cy.contains('p', 'Your email or password is incorrect!', { timeout: 10000 })
      .should('be.visible');
  });
});