import ProdutosPage from '../support/pages/ProdutosPage';

describe('Funcionalidade: Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    ProdutosPage.acessarPaginaProdutos();
    ProdutosPage.pesquisarProduto('Top');
    ProdutosPage.adicionarPrimeiroProdutoAoCarrinho();
    ProdutosPage.continuarComprando();
    ProdutosPage.irParaCarrinho();
    ProdutosPage.validarProdutoNoCarrinho();
  });
});