class ProdutosPage {
  acessarPaginaProdutos() {
    cy.get('a[href="/products"]').first().click();
  }

  pesquisarProduto(nomeProduto) {
    cy.get('#search_product').type(nomeProduto);
    cy.get('#submit_search').click();
  }

  adicionarPrimeiroProdutoAoCarrinho() {
    cy.get('.productinfo .add-to-cart').first().click({ force: true });
  }

  continuarComprando() {
    cy.get('.btn-success.close-modal').first().click({ force: true });
    cy.get('#cartModal', { timeout: 10000 }).should('not.be.visible');
  }

  irParaCarrinho() {
    cy.get('a[href="/view_cart"]').first().click();
  }

  validarProdutoNoCarrinho() {
    cy.url().should('include', '/view_cart');
    cy.get('.cart_description h4', { timeout: 10000 }).should('be.visible');
  }
}

export default new ProdutosPage();