require('cypress-xpath')
describe('Text Box', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
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
    it('Should fill the form', () => {
        cy.get('#userName').type('Katerina Mickoska');
        //cy.get('[placeholder="Full Name"]').type(name);
        cy.get('#userEmail').type('katerina.mickoska@test.de');
        //cy.get('[placeholder="name@example.com""]').type('katerina.mickoska@test.de');
        cy.get('#currentAddress').type('Test Address');
        //cy.get('[placeholder="Current Address"]').type('Test Address');
        cy.get('#permanentAddress').type('Test Address 2');
        //cy.xpath('//*[@id="permanentAddress"]').type('Test Adress');
        cy.get('#submit').click({ force: true });
        //cy.contains('button', 'Submit').click();

        // assertation 
        cy.get('#output').within(() => {
            cy.get('#name').should('contain.text', 'Katerina Mickoska');
            cy.get('#email').should('contain.text', 'katerina.mickoska@test.de');
            cy.get('#currentAddress').should('contain.text', 'Test Address');
            cy.get('#permanentAddress').should('contain.text', 'Test Address 2');
        });
    });
});

