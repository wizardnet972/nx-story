describe('nx-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-story-nx-welcome').should('exist');
  });
});