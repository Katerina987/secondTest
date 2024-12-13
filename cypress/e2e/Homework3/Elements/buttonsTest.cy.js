require('cypress-xpath')
describe('Buttons', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/buttons')
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Script error')) {
            // Handle specific error message or type if needed
            return false;
        }
        // Optionally log the error to console if you want
        console.error(err);
        return false;
    });
    it('Should double click button', () => {
        cy.get('#doubleClickBtn').dblclick();
        cy.contains('You have done a double click').should('be.visible');
    });
    it('should right click the button', () => {
        cy.get('#rightClickBtn').rightclick();
        cy.contains('You have done a right click').should('be.visible');
    });
    it('should right click the button', () => {
        cy.xpath('//div[contains(@class, "mt-4")]//button[text()="Click Me"]').click();
        cy.contains('You have done a dynamic click').should('be.visible');
    });
});