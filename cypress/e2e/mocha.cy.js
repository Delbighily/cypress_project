///<reference types="cypress"/>
import Signup from "../PageObjectModel/SignUp";
import SignIn from "../PageObjectModel/SignIn";
beforeEach(()=>{
    cy.fixture('dataFile').as('user');
})



it('Sign up test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Create an Account').click();
    const ob1=new Signup;
    ob1.checkPageTitle();
    ob1.setUserName(user.firstName,user.lastName);
    ob1.setEmailPasswprd(user.email,user.password);
    ob1.confirmPassword(user.password);
    ob1.clickSubmit();
    ob1.AssertSuccess();
})
})
it.only('Sign in test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').should('be.visible').click();
    const ob2=new SignIn;
    ob2.fillEmail(user.email);
    ob2.fillPassword(user.password);
    ob2.clickSignin();
    ob2.AssertSuccess(user.firstName,user.lastName);
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
it('Purchase test',()=>{
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
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').click();
    cy.get('#email').type(user.email);
    cy.get('#pass').wait(1000).type(user.password);
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
    cy.wait(10000).get('[name=firstname]').clear().type(user.firstName);
    cy.get('[name=lastname]').clear().type(user.lastName);
    cy.get('[name=country_id]').select(user.country)
    cy.get('.input-text').eq(5).clear().type(user.building);
    cy.get('.input-text').eq(6).clear().type(user.floor);
    cy.get('.input-text').eq(7).clear().type(user.street);
    cy.get('[name=city]').type('Damietta');
    cy.get('[name=postcode]').type(user.zip);
    cy.get('[name=telephone]').type(user.phone);
    cy.get('[data-role=opc-continue]').click()
    cy.contains('Place Order',{timeout:10000}).click();
    cy.contains('Your order number is: ',{timeout:10000}).should('be.visible');
})
})
it('Rate product test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').click();
    cy.get('#email').type(user.email);
    cy.get('#pass').type(user.password);
    cy.get(' #send2').first().click();
    cy.get('#ui-id-5 > :nth-child(2)').click();
    cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click();
    cy.get(':nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.get('#tab-label-reviews-title').click();
    cy.get('#Rating_4_label').click({force:true});
    cy.get('#nickname_field').wait(3000).clear().type(user.firstName)
    cy.get('#summary_field').wait(1000).type('good value for the money');
    cy.get('#review_field').wait(1000).type('would really recommend it to my friends');
    cy.get('.actions-primary > .action > span').click();
    cy.get('.message-success').should('be.visible');
})
})