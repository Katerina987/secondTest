import handleError from "../handleError/handleError";
describe ('accept alert', () => {
    before(() => {
        handleError.uncaughtException();
        cy.visit('https://www.hyrtutorials.com/p/alertsdemo.html');
    });
    it('should accept the alert ', () => {
        cy.get('#confirmBox').scrollIntoView().click();
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.contains('Press a button!')
            return true;
        })
        cy.get('#output').should('contain.text', 'You pressed OK in confirmation popup')
    });
})