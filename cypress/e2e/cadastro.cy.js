import cadastroPage from '../support/pages/CadastroPage'

describe('Cadastro de Utilizador', () => {
  it('Deve efetuar o registo de um novo utilizador com sucesso', () => {
    cy.visit('https://automationexercise.com/login')

    const emailDinamico = `qa_test_${Date.now()}@mail.com`

    // Executa as ações através do Page Object
    cadastroPage.preencherFormularioCompleto({
      nome: 'Manuela Rodrigues',
      email: emailDinamico,
      senha: 'SenhaSegura123'
    })

    // Validação
    cadastroPage.validarCadastroComSucesso()
  })
})