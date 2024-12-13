/// <reference types="cypress" />
class ComputerPage {
    constructor() {
        this.url = 'https://computer-database.gatling.io/computers';
    }
    visit() {
        cy.visit(this.url);
    }
    verifyTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle);
    }
}

export default ComputerPage;