describe('Cadastro de Utilizador', () => {
  // Ignora erros não capturados que o próprio site lança devido a anúncios
  Cypress.on('uncaught:exception', () => false);

  it('Deve preencher o formulário e criar uma conta com sucesso', () => {
    const emailUnico = `utilizadora_${Date.now()}@test.com`;

    // 1. Visitar a página principal
    cy.visit('https://automationexercise.com');

    // 2. Clicar em Signup / Login
    cy.get('a[href="/login"]').click({ force: true });

    // 3. Preencher nome e e-mail no registo inicial
    cy.get('[data-qa="signup-name"]').type('Manuela Rodrigues');
    cy.get('[data-qa="signup-email"]').type(emailUnico);
    cy.get('[data-qa="signup-button"]').click({ force: true });

    // 4. Detalhes da Conta (Gênero, Password, Data de Nascimento)
    cy.get('#id_gender2').check({ force: true });
    cy.get('[data-qa="password"]').type('SenhaSegura123');
    
    cy.get('[data-qa="days"]').select('15');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1995');

    cy.get('#newsletter').check({ force: true });
    cy.get('#optin').check({ force: true });

    // 5. Preencher Informações de Endereço
    cy.get('[data-qa="first_name"]').type('Manuela');
    cy.get('[data-qa="last_name"]').type('Rodrigues');
    cy.get('[data-qa="company"]').type('QA Solutions');
    cy.get('[data-qa="address"]').type('Rua Principal, nº 123');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('Lisboa');
    cy.get('[data-qa="city"]').type('Lisboa');
    cy.get('[data-qa="zipcode"]').type('1000-001');
    cy.get('[data-qa="mobile_number"]').type('912345678');

    // 6. Submeter o formulário
    cy.get('[data-qa="create-account"]').click({ force: true });

    // 7. Validar mensagem de sucesso final
    cy.get('[data-qa="account-created"]', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'ACCOUNT CREATED!');
  });
});describe('Login de Utilizador', () => {
  // Ignora erros não capturados disparados por anúncios do site
  Cypress.on('uncaught:exception', () => false);

  it('Deve realizar login com credenciais válidas', () => {
    // 1. Visitar a página inicial
    cy.visit('https://automationexercise.com');

    // 2. Clicar no botão 'Signup / Login'
    cy.get('a[href="/login"]').click({ force: true });

    // 3. Preencher os campos de Login
    cy.get('[data-qa="login-email"]').type('utilizadora_teste@test.com');
    cy.get('[data-qa="login-password"]').type('SenhaSegura123');

    // 4. Clicar no botão de submissão do login
    cy.get('[data-qa="login-button"]').click({ force: true });

    // 5. Validar que o login foi efetuado com sucesso
    cy.get('li').contains('Logged in as').should('be.visible');
  });
});describe('Login de Utilizador', () => {
  Cypress.on('uncaught:exception', () => false);

  it('Deve criar um utilizador e realizar login com sucesso', () => {
    const emailUnico = `utilizadora_${Date.now()}@test.com`;
    const senha = 'SenhaSegura123';

    // 1. Criar o utilizador via formulário
    cy.visit('https://automationexercise.com');
    cy.get('a[href="/login"]').click({ force: true });
    
    cy.get('[data-qa="signup-name"]').type('Manuela Rodrigues');
    cy.get('[data-qa="signup-email"]').type(emailUnico);
    cy.get('[data-qa="signup-button"]').click({ force: true });

    cy.get('#id_gender2').check({ force: true });
    cy.get('[data-qa="password"]').type(senha);
    cy.get('[data-qa="days"]').select('15');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1995');

    cy.get('[data-qa="first_name"]').type('Manuela');
    cy.get('[data-qa="last_name"]').type('Rodrigues');
    cy.get('[data-qa="address"]').type('Rua Principal, nº 123');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('Lisboa');
    cy.get('[data-qa="city"]').type('Lisboa');
    cy.get('[data-qa="zipcode"]').type('1000-001');
    cy.get('[data-qa="mobile_number"]').type('912345678');
    cy.get('[data-qa="create-account"]').click({ force: true });

    // 2. Fazer Logout para testar o Login
    cy.get('a[href="/logout"]').click({ force: true });

    // 3. Fazer Login com as credenciais recém-criadas
    cy.get('[data-qa="login-email"]').type(emailUnico);
    cy.get('[data-qa="login-password"]').type(senha);
    cy.get('[data-qa="login-button"]').click({ force: true });

    // 4. Validar se o login correu bem
    cy.get('li', { timeout: 10000 }).contains('Logged in as').should('be.visible');
  });
});describe('Login de Utilizador', () => {
  Cypress.on('uncaught:exception', () => false);

  it('Deve criar um utilizador e realizar login com sucesso', () => {
    const emailUnico = `utilizadora_${Date.now()}@test.com`;
    const senha = 'SenhaSegura123';

    // 1. Criar o utilizador via formulário
    cy.visit('https://automationexercise.com');
    cy.get('a[href="/login"]').click({ force: true });
    
    cy.get('[data-qa="signup-name"]').type('Manuela Rodrigues');
    cy.get('[data-qa="signup-email"]').type(emailUnico);
    cy.get('[data-qa="signup-button"]').click({ force: true });

    cy.get('#id_gender2').check({ force: true });
    cy.get('[data-qa="password"]').type(senha);
    cy.get('[data-qa="days"]').select('15');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1995');

    cy.get('[data-qa="first_name"]').type('Manuela');
    cy.get('[data-qa="last_name"]').type('Rodrigues');
    cy.get('[data-qa="address"]').type('Rua Principal, nº 123');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('Lisboa');
    cy.get('[data-qa="city"]').type('Lisboa');
    cy.get('[data-qa="zipcode"]').type('1000-001');
    cy.get('[data-qa="mobile_number"]').type('912345678');
    cy.get('[data-qa="create-account"]').click({ force: true });

    // 2. Clicar no botão 'Continue' após a criação da conta
    cy.get('[data-qa="continue-button"]').click({ force: true });

    // 3. Fazer Logout para testar o Login
    cy.get('a[href="/logout"]').click({ force: true });

    // 4. Fazer Login com as credenciais recém-criadas
    cy.get('[data-qa="login-email"]').type(emailUnico);
    cy.get('[data-qa="login-password"]').type(senha);
    cy.get('[data-qa="login-button"]').click({ force: true });

    // 5. Validar se o login foi efetuado com sucesso
    cy.get('li', { timeout: 10000 }).contains('Logged in as').should('be.visible');
  });
});