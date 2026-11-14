class LoginPage {
  acessarPaginaLogin() {
    cy.get('a[href="/login"]').click();
  }

  preencherLogin(email, senha) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);
    cy.get('[data-qa="login-button"]').click();
  }

  validarLoginComSucesso(nomeUsuario) {
    cy.contains(`Logged in as ${nomeUsuario}`).should('be.visible');
  }

  validarMensagemErro() {
    cy.contains('Your email or password is incorrect!').should('be.visible');
  }
}

export default new LoginPage();