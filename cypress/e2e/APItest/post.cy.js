describe('Sample API Test', () => {
    it('API POST test', () => {
        cy.request('POST', 'https://petstore.swagger.io/v2/pet',
            {
                "id": 4648648484,
                "category": {
                    "id": 54648484848,
                    "name": "string"
                },
                "name": "K",
                "status": "available"
            }
        ).then((response) => {
            expect(response.status).to.eq.(200);
            expect(response.body.name).to.eq('K')

        });
    });
});
