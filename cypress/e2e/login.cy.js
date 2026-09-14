describe('Testes de E-commerce - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('Deve adicionar produto ao carrinho e finalizar a compra', () => {
    // 1. Adiciona a mochila ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // 2. Clica no ícone do carrinho
    cy.get('.shopping_cart_link').click()

    // 3. Avança para o Checkout
    cy.get('[data-test="checkout"]').click()

    // 4. Preenche os dados de envio
    cy.get('[data-test="firstName"]').type('Maria')
    cy.get('[data-test="lastName"]').type('QA')
    cy.get('[data-test="postalCode"]').type('1000-001')
    cy.get('[data-test="continue"]').click()

    // 5. Finaliza a encomenda
    cy.get('[data-test="finish"]').click()

    // 6. Valida a mensagem de sucesso
    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')
  })
})