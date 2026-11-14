import ProdutosPage from '../support/pages/ProdutosPage';

describe('Funcionalidade: Carrinho de Compras', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    // 1. Ir para a página de produtos
    ProdutosPage.acessarPaginaProdutos();

    // 2. Pesquisar por um produto (ex: 'Top')
    ProdutosPage.pesquisarProduto('Top');

    // 3. Adicionar o primeiro produto encontrado ao carrinho
    ProdutosPage.adicionarPrimeiroProdutoAoCarrinho();

    // 4. Fechar o modal e ir para o carrinho
    ProdutosPage.continuarComprando();
    ProdutosPage.irParaCarrinho();

    // 5. Validar que o produto está presente no carrinho
    ProdutosPage.validarProdutoNoCarrinho();
  });

});