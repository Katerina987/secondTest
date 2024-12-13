import { faker } from '@faker-js/faker';
describe('Text Box', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
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
    it('Should fill and submit the form', () => {
        cy.get('#userName').type('Katerina Mickoska');
        cy.get('#userEmail').type('katerina.mickoska@test.de');
        cy.get('#currentAddress').type('Test Address');
        cy.get('#permanentAddress').type('Test Address 2');
        cy.get('#submit').click({ force: true });
        // assertation 
    });
});
