continuarComprando() {
  cy.get('.btn-success.close-modal').first().click({ force: true });
  cy.get('.btn-success.close-modal').should('not.be.visible');
}

irParaCarrinho() {
  cy.get('a[href="/view_cart"]').first().click();
}