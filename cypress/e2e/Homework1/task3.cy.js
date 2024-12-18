describe('Visit page', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });
    it('Checks Title', () => {
        cy.title().should('eq', 'Swag Labs');
    });
    it('Should verify that email and pass are visible', () => {
        cy.get('input[name="user-name"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
    });
    after(() => {
        cy.log('Completed tests for Sauce Demo');
    });
});
