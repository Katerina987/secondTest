require('cypress-xpath')
describe('Buttons', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/radio-button')
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
    it('Should click radio button Yes', () => {
        cy.get('#yesRadio').click({ force: true });
        //cy.get('label[for="yesRadio"]').click();
        cy.contains('You have selected Yes').should('be.visible');
        //cy.get('p.mt-3').should('have.text', 'You have selected Yes');
    });
    it('Should click radio button Impressive', () => {
        cy.get('#impressiveRadio').click({ force: true });
        //cy.xpath('//*[@id="impressiveRadio"]').check( {force: true} );
        cy.contains('You have selected Impressive').should('be.visible');
        //cy.get('p.mt-3').should('have.text', 'You have selected Impressive');
    });
    it('Radio button No is disabled', () => {
        cy.get('#noRadio').should('be.disabled');
    });
});