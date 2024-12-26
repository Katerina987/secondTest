describe('Pet APIs test', () => {
    const petData = require('../../../fixtures/PetInfo.json');
    let requestBody = require('../../models/petModelFile.json');
  
    it('Create new pet POST', () => {
      requestBody.id = petData.petId;
      requestBody.name = petData.petName;
      requestBody.category.id = petData.categoryId;
      requestBody.category.name = petData.categoryName;
      requestBody.status = petData.petStatus;
  
      cy.request('POST', 'https://petstore.swagger.io/v2/pet', requestBody).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(petData.petName);
        expect(response.body.status).to.eq(petData.petStatus);
      });
    });
  
    it('Find Pet GET', () => {
      cy.request('GET', `https://petstore.swagger.io/v2/pet/${petData.petId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petData.petId);
        expect(response.body.name).to.eq(petData.petName);
        expect(response.body.status).to.eq(petData.petStatus);
      });
    })
  
    it('Update Pet PUT', () => {
      requestBody.id = petData.petId;
      requestBody.name = petData.newPetName;
      requestBody.status = petData.newPetStatus;
  
      cy.request('PUT', 'https://petstore.swagger.io/v2/pet', requestBody).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('Validate updated Pet GET', () => {
      cy.request('GET', `https://petstore.swagger.io/v2/pet/${petData.petId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petData.petId);
        expect(response.body.name).to.eq(petData.newPetName);
        expect(response.body.status).to.eq(petData.newPetStatus);
      });
    });
  
    it('Delete Pet  DELETE', () => {
      cy.request('DELETE', `https://petstore.swagger.io/v2/pet/${petData.petId}`).then((response) => {
        expect(response.status).to.eq(200);
      })
    });

    it('Validate deleted Pet GET', () => {
        let options = {
            method: 'GET',
            url: `https://petstore.swagger.io/v2/pet/${petData.petId}`,
            failOnStatusCode: false}
        cy.request(options).then((response) => {
            expect(response.status).to.eq(404)
        })
    })
});