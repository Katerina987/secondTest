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
        //cy.contains('button', 'Double Click Me').dblclick();
        cy.contains('You have done a double click').should('be.visible');
        //cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
    });
    it('should right click the button', () => {
        cy.get('#rightClickBtn').rightclick();
        //cy.contains('button', 'Right Click Me').rightclick();
        cy.contains('You have done a right click').should('be.visible');
        //cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
    });
    it('should right click the button', () => {
        cy.xpath('//div[contains(@class, "mt-4")]//button[text()="Click Me"]').click();
        //cy.get('button').eq(3).filter(':contains("Click Me")').click();
        cy.contains('You have done a dynamic click').should('be.visible');
        //cy.get('#dynamicClickMessage').should('contain.text', 'dynamic click');
    });
});