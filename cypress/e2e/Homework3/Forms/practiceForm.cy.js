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
        let userEmailFaker = faker.internet.email();
        let userFirstName = faker.person.firstName();
        let userLastName = faker.person.lastName();
        cy.get('#firstName').type(userFirstName);
        cy.get('#lastName').type(userLastName);
        cy.get('#userEmail').type(userEmailFaker);
        cy.get('#userNumber').type('1234567890');
        cy.get('#subjectsInput').type('Arts{enter}')
        cy.contains('label', 'Male').click();
        cy.contains('label', 'Reading').click();
        cy.contains('label', 'Sports').click();
        cy.get('#state').click();
        cy.contains('div', 'NCR').click();
        cy.get('#city').click();
        cy.contains('div', 'Noida').click();
        cy.get('#submit').click();

        //validate
        cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form')
        cy.get('.modal-content').should('contain.text', userFirstName);
        cy.get('.modal-content').should('contain.text', userLastName);
        cy.get('.modal-content').should('contain.text', userEmailFaker);
        cy.get('.modal-content').should('contain.text', '1234567890');

    });
});
