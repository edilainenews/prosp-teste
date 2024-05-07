describe('funcionalidades de cadastro', () => {

  beforeEach(() => {
    // 1. Executar o navegador
    // 2. Navegar para a url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com');
  });

  it('entrar em contato', () => { 
    // 3. Validar que a página inicial carregou com sucesso
    // 4. Validar que ao clicar no botão contact us o formulário é exibido
    cy.get('.shop-menu > .nav > :nth-child(8) > a').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
  });
});