import LoginActions from "./classLogInTask5";
describe('visit Swag page', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });
    
    describe('LoginFeatureTests', () => {
        it('should login successfully', () => {
            LoginActions.login('standard_user', 'secret_sauce')
        });
    });
});