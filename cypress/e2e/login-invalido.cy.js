cy.contains('p', 'Your email or password is incorrect!', { timeout: 10000 })
  .should('be.visible')