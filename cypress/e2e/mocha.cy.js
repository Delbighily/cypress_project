///<reference types="cypress"/>




it('Sign up test',()=>{
    cy.visit('/')
    cy.contains('Create an Account').click();
    cy.get('#firstname').type('diaa');
    cy.get('#lastname').type('mohamed');
    cy.get('#email_address').type('zxcvb15@gmail.com');
    cy.get('#password').type('Aa123456*');
    cy.get('#password-confirmation').type('Aa123456*');
    cy.get('.submit').click();
})
it('Sign in test',()=>{
    cy.visit('/')
    cy.contains('Sign In ').click();
    cy.get('#email').type('zxcvb15@gmail.com');
    cy.get('#pass').type('Aa123456*');
    cy.get(' #send2').first().click();
})
it('Search test',()=>{
    cy.visit('/')
    cy.contains('Sign In ').click();
    cy.get('#email').type('zxcvb15@gmail.com');
    cy.get('#pass').type('Aa123456*');
    cy.get(' #send2').first().click();
    cy.get('#search').type('watch{enter}');
    //cy.get('[aria-label=Search]',).click();
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.contains('Add to Wish List').click();
})
it.skip('Purchase test',()=>{
    cy.visit('/')
    cy.contains('Sign In ').click();
    cy.get('#email').type('zxcvb15@gmail.com');
    cy.get('#pass').type('Aa123456*');
    cy.get(' #send2').first().click();
    cy.get('#ui-id-5 > :nth-child(2)').click();
    cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click();
    cy.get(':nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#option-label-size-143-item-168').click();
    cy.get('#option-label-color-93-item-53').click();
    cy.get('#qty').type('3');
    cy.get('#product-addtocart-button').click();
})
it.only('checkout test',()=>{
    cy.visit('/')
    cy.contains('Sign In ').click();
    cy.get('#email').type('zxcvb15@gmail.com');
    cy.get('#pass').type('Aa123456*');
    cy.get(' #send2').first().click();
    cy.get('#ui-id-5 > :nth-child(2)').click();
    cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click();
    cy.get(':nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#option-label-size-143-item-168').wait(1000).click();
    cy.get('#option-label-color-93-item-53').wait(1000).click();
    cy.get('#qty').wait(1000).clear().type('3');
    cy.get('#product-addtocart-button').wait(500).click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').wait(3000).click();
    cy.wait(10000).get('[name=firstname]').clear().type('Diaa');
    cy.get('[name=lastname]').clear().type('7ambola');
    cy.get('[name=country_id]').select('Egypt')
    cy.get('.input-text').eq(5).clear().type('16');
    cy.get('.input-text').eq(6).clear().type('wazeer st');
    cy.get('.input-text').eq(7).clear().type('Ard el gamal');
    cy.get('[name=city]').type('Damietta');
    cy.get('[name=postcode]').type('123456');
    cy.get('[name=telephone]').type('0123456789');
    cy.get('[data-role=opc-continue]').click()
    cy.contains('Place Order').click()

    


    
})