describe('Computer Database Page', () => {
    it('Visits the page and verifies the title', () => {
        cy.visit('https://computer-database.gatling.io/computers');
        cy.title().should('eq', 'Computers database');
        cy.get('#searchbox').type('ACE');
        cy.contains('Filter by name').click();
        cy.get('#main > table tbody tr').should('have.length', 6);
        cy.get('#main').should('contain.text', 'computers found').then((elm) => {
            resultCount = parseInt(elm.text().split(' ')[0])
            cy.get('table.computers tbody tr').should('have.length', resultCount)
        });
    });
});