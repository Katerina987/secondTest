describe('Create user API', () => {
    const userData = require('../../../fixtures/UserInfo.json');
    let requestBody = require('../../models/userModelFile.json');
  
    it('Create new user POST', () => {
      requestBody.id = userData.userId;
      requestBody.username = userData.username;
      requestBody.firstName = userData.firstName;
      requestBody.lastName = userData.lastName;
      requestBody.email = userData.email;
      requestBody.password = userData.password;
      requestBody.phone = userData.phone;
      requestBody.userStatus = userData.userStatus;
  
      cy.request('POST', 'https://petstore.swagger.io/v2/user', requestBody).then((response) => {
        expect(response.status).to.eq(200);
        expect(requestBody.username).to.eq(userData.username);
      });
    })
  
    it('Get user GET test', () => {
      cy.request('GET', `https://petstore.swagger.io/v2/user/${userData.username}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.username).to.eq(userData.username);
        expect(response.body.firstName).to.eq(userData.firstName);
      });
    });
  
    it('Update user PUT test', () => {
      requestBody.firstName = userData.updatedFirstName;
      requestBody.lastName = userData.updatedLastName;
  
      cy.request('PUT', `https://petstore.swagger.io/v2/user/${userData.username}`, requestBody).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq(String(userData.userId));
      });
    });
  
    it('Validate updated user GET test', () => {
      cy.request('GET', `https://petstore.swagger.io/v2/user/${userData.username}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.firstName).to.eq(userData.updatedFirstName);
        expect(response.body.lastName).to.eq(userData.updatedLastName);
      });
    });
  
    it('Delete user DELETE test', () => {
      cy.request('DELETE', `https://petstore.swagger.io/v2/user/${userData.username}`).then((response) => {
        expect(response.status).to.eq(200);
      });
    })

    it('Validate deleted Pet with GET', () => {
        let options = {
            method: 'GET',
            url: `https://petstore.swagger.io/v2/user/${userData.username}`,
            failOnStatusCode: false}
        cy.request(options).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
});
