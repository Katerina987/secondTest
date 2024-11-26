describe('Computer Database Page', () => {
    it('Visits the page and verifies the title', () => {
        cy.visit('https://computer-database.gatling.io/computers');
        cy.title().should('eq', 'Computers database');
        cy.contains('Add a new computer').click();
        cy.get('#name').type('ACE');
        cy.get('#introduced').type('2222-11-19');
        cy.get('#discontinued').type('2222-11-20');
        cy.get('#company').select('IBM');
        cy.get('.primary').click();
        cy.get('.alert-message').should('be.visible').and('contain.text','Done !  Computer ACE has been created');
    });
});