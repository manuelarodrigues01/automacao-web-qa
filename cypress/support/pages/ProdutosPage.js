class ProdutosPage {
  acessarPaginaProdutos() {
    cy.get('a[href="/products"]').click();
  }

  pesquisarProduto(nomeProduto) {
    cy.get('#search_product').type(nomeProduto);
    cy.get('#submit_search').click();
  }

  adicionarPrimeiroProdutoAoCarrinho() {
    // Reconsulta o elemento no DOM no exato momento do clique para evitar erro de elemento desanexado
    cy.get('.productinfo .add-to-cart').first().click({ force: true });
  }

  continuarComprando() {
    // Clica no botão de fechar modal garantindo visibilidade e elemento ativo
    cy.get('.btn-success.close-modal').first().click({ force: true });
  }

  irParaCarrinho() {
    cy.get('a[href="/view_cart"]').first().click();
  }

  validarProdutoNoCarrinho() {
    cy.get('.cart_description h4').should('be.visible');
  }
}

export default new ProdutosPage();