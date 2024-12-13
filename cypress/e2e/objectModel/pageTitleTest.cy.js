describe('Page Title Tests', () => {
    require('../utilities/testSetup.cy')
    it('Verify Title', () => {
        cy.title().should('eq','Computers database')
      })
})