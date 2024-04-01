///<reference types="cypress"/>
beforeEach(()=>{
    cy.fixture('dataFile').as('user');
})



it('Sign up test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Create an Account').click();
    cy.title().should('eql','Create New Customer Account')
    cy.get('#firstname').should('be.visible').type(user.firstName);
    cy.get('#lastname').should('be.visible').type(user.lastName);
    cy.get('#email_address').should('be.visible').type(user.email);
    cy.get('#password').should('be.visible').type(user.password);
    cy.get('#password-confirmation').should('be.visible').type(user.password);
    cy.get('.submit').click();
    cy.get('.message-success').should('contain','Thank you for registering with Main Website Store.')
    cy.title().should('eql','My Account')
})
})
it('Sign in test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').should('be.visible').click();
    cy.get('#email').should('be.visible').type(user.email);
    cy.get('#pass').type(user.password);
    cy.get(' #send2').should('be.visible').first().click();
    cy.get('.logged-in').should('contain.text','Welcome, ',user.firstName+user.lastName+'!');
})
})
it('Search test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').click();
    cy.get('#email').should('be.visible').type(user.email);
    cy.get('#pass').should('be.visible').type(user.password);
    cy.get(' #send2').first().should('be.visible').click();
    cy.get('.logged-in',{timeout:10000}).should('be.visible');
    cy.get('#search').should('be.visible').type(user.searchWord+'{enter}');
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('.base').should('include.text',user.searchWord)//The word it asserts is case sensitive.
    cy.get('.logged-in',{timeout:10000}).should('be.visible');
    cy.contains('Add to Wish List').click();
    cy.get('.message-success').should('be.visible');
})
})
it.only('Purchase test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').click();
    cy.get('#email').type(user.email);
    cy.get('#pass').type(user.password);
    cy.get(' #send2').first().click();
    cy.get('#ui-id-5 > :nth-child(2)').click();
    cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click();
    cy.get(':nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#option-label-size-143-item-168').wait(1000).click();
    cy.get('#option-label-color-93-item-53').wait(1000).click();
    cy.get('#qty').wait(1000).clear().type('3');
    cy.get('.swatch-attribute-selected-option').first().should('contain','M');
    cy.get('.swatch-attribute-selected-option').last().should('contain','Green');
    cy.get('#product-addtocart-button').wait(500).click();
    cy.get('.counter-number').click();
    cy.get('[title="Remove item"]').click();
    cy.get('.action-accept').click();
    cy.get('.block-minicart.block').should('contain','You have no items in your shopping cart.')
})
})
it('checkout test',()=>{
    cy.visit('/')
    cy.contains('Sign In ').click();
    cy.get('#email').type('zxcvb25@gmail.com');
    cy.get('#pass').wait(1000).type('Aa123456*');
    cy.get(' #send2').first().click();
    cy.get('.logged-in',{timeout:10000}).should('be.visible');
    cy.get('#ui-id-5 > :nth-child(2)').click();
    cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click();
    cy.get(':nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#option-label-size-143-item-168').wait(1000).click();
    cy.get('#option-label-color-93-item-53').wait(1000).click();
    cy.get('#qty').wait(1000).clear().type('3');
    cy.get('#product-addtocart-button').wait(500).click();
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').wait(3000).click({force:true});
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
    cy.contains('Place Order',{timeout:10000}).click();
    cy.contains('Your order number is: ',{timeout:10000}).should('be.visible');
})
it('Rate product test',()=>{
    cy.visit('/')
    cy.contains('Sign In ').click();
    cy.get('#email').type('zxcvb15@gmail.com');
    cy.get('#pass').type('Aa123456*');
    cy.get(' #send2').first().click();
    cy.get('#ui-id-5 > :nth-child(2)').click();
    cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click();
    cy.get(':nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#tab-label-reviews-title').click();
    cy.get('#Rating_4_label').click({force:true});
    cy.get('#nickname_field').wait(3000).clear().type('Diaa')
    cy.get('#summary_field').wait(1000).type('good value for the money');
    cy.get('#review_field').wait(1000).type('would really recommend it to my friends');
    cy.get('.actions-primary > .action > span').click();
    cy.get('.message-success').should('be.visible');
})