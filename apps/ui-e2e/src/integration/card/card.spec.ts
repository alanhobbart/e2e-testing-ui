describe('ui: Card component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=card--primary'));
    
    it('should render the component', () => {
      cy.get('').should('contain', 'TRAFFIC');
    });
});
