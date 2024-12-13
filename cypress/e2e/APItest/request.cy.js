describe('Sample API Test', () => {
    it('API GET test', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/1001').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq.('doggie')
        });
    });
    });

