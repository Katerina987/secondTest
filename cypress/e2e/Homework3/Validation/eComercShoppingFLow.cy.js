import { faker, Faker } from "@faker-js/faker";
describe('Shopping flow', () => {
    before(() => {
        cy.visit('https://practice.automationtesting.in/');

    })
    it('Add product to the cart', () => {
        let email = faker.internet.email();
        let firstName = faker.internet.username();
        let lastName = faker.internet.username();
        let address = faker.location.streetAddress();
        let postNumber = 6250

        cy.get('a[data-product_id="160"]').click();
        cy.get('span.cartcontents').should('have.text', '1 item');
        cy.get('a.wpmenucart-contents').click({ force: true });
        cy.url().should('include', '/basket/');
        cy.get('a.checkout-button').click();
        cy.get('#billing_first_name').type(firstName);
        cy.get('#billing_last_name').type(lastName);
        cy.get('#billing_email').type(email);
        cy.get('#billing_phone').type('1234567890');
        cy.get('#select2-chosen-1').click();
        cy.get('#s2id_autogen1_search').type('Macedonia');
        cy.get('.select2-match').contains('Macedonia').click();
        cy.get('#billing_address_1').type(address);
        cy.get('#billing_city').type('Kichevo');
        cy.get('#billing_state').type('Macedonia');
        cy.get('#billing_postcode').type(postNumber);
        cy.get('[name="payment_method"][value="cod"]').click();
        cy.get('#place_order').click();
        //validate tbe order 
        cy.get('.woocommerce-thankyou-order-received').should('contain.text', 'Thank you. Your order has been received.');
    })
})