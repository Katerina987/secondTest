describe('Store API', () => {
    const storeData = require('../../../fixtures/StoreInfo.json');
    let requestBody = require('../../models/orderModelFile.json');
  
    it('Make order POST', () => {
      requestBody.id = storeData.orderId;
      requestBody.petId = storeData.petId;
      requestBody.quantity = storeData.quantity;
  
      cy.request('POST', 'https://petstore.swagger.io/v2/store/order', requestBody).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(storeData.orderId);
      });
    });
  
    it('Get order GET', () => {
      cy.request('GET', `https://petstore.swagger.io/v2/store/order/${storeData.orderId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(storeData.orderId);
        expect(response.body.petId).to.eq(storeData.petId);
      })
    });
  
    it('Delete order(DELETE)', () => {
      cy.request('DELETE', `https://petstore.swagger.io/v2/store/order/${storeData.orderId}`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it('Validate deleted Pet with GET', () => {
        let options = {
            method: 'GET',
            url: `https://petstore.swagger.io/v2/store/order/${storeData.orderId}`,
            failOnStatusCode: false}
        cy.request(options).then((response) => {
            expect(response.status).to.eq(404)
        });
    })
});