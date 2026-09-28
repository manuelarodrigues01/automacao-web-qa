class CadastroPage {
  // 1. Mapeamento dos elementos (Seletores)
  elements = {
    signupName: () => cy.get('[data-qa="signup-name"]'),
    signupEmail: () => cy.get('[data-qa="signup-email"]'),
    signupButton: () => cy.get('[data-qa="signup-button"]'),
    genderFemale: () => cy.get('#id_gender2'),
    password: () => cy.get('[data-qa="password"]'),
    days: () => cy.get('[data-qa="days"]'),
    months: () => cy.get('[data-qa="months"]'),
    years: () => cy.get('[data-qa="years"]'),
    newsletter: () => cy.get('#newsletter'),
    optin: () => cy.get('#optin'),
    firstName: () => cy.get('[data-qa="first_name"]'),
    lastName: () => cy.get('[data-qa="last_name"]'),
    company: () => cy.get('[data-qa="company"]'),
    address: () => cy.get('[data-qa="address"]'),
    country: () => cy.get('[data-qa="country"]'),
    state: () => cy.get('[data-qa="state"]'),
    city: () => cy.get('[data-qa="city"]'),
    zipcode: () => cy.get('[data-qa="zipcode"]'),
    mobileNumber: () => cy.get('[data-qa="mobile_number"]'),
    createAccountButton: () => cy.get('[data-qa="create-account"]'),
    accountCreatedText: () => cy.get('[data-qa="account-created"]'),
    continueButton: () => cy.get('[data-qa="continue-button"]')
  }

  // 2. Ações na Página
  preencherFormularioCompleto(usuario) {
    // Passo inicial
    this.elements.signupName().type(usuario.nome)
    this.elements.signupEmail().type(usuario.email)
    this.elements.signupButton().click()

    // Detalhes da conta
    this.elements.genderFemale().check()
    this.elements.password().type(usuario.senha)
    this.elements.days().select('10')
    this.elements.months().select('May')
    this.elements.years().select('1995')

    // Opções
    this.elements.newsletter().check()
    this.elements.optin().check()

    // Endereço
    this.elements.firstName().type(usuario.nome)
    this.elements.lastName().type('Silva')
    this.elements.company().type('Empresa QA')
    this.elements.address().type('Rua Exemplo, 123')
    this.elements.country().select('United States')
    this.elements.state().type('California')
    this.elements.city().type('Los Angeles')
    this.elements.zipcode().type('90001')
    this.elements.mobileNumber().type('123456789')

    // Submeter
    this.elements.createAccountButton().click()
  }

  validarCadastroComSucesso() {
    this.elements.accountCreatedText().should('be.visible')
    this.elements.continueButton().click()
  }
}

export default new CadastroPage()