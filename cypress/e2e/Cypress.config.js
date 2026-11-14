it('Deve fazer login com sucesso', () => {
  LoginPage.preencherLogin('o_teu_email_real_registado@gmail.com', 'tua_senha_correta');
  LoginPage.clicarLogin();
  LoginPage.validarLoginSucesso();
});