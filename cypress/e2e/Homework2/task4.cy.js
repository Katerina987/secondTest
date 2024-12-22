const users = [
    { username: 'standard_user', password: 'secret_sauce' },
    { username: 'locked_out_user', password: 'secret_sauce' },
]

describe('Login Form Tests', () => {
    users.forEach(user => {
        it(`Should log in as ${user.username}`, () => {
            cy.visit('https://www.saucedemo.com/');
            cy.get('input[name="user-name"]').type(user.username);
            cy.get('input[name="password"]').type(user.password); 
            cy.get('input[type="submit"]').click();
        })
        });
});
