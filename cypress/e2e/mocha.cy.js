///<reference types="cypress"/>
import Signup from "../PageObjectModel/SignUp";
import SignIn from "../PageObjectModel/SignIn";
import Search from "../PageObjectModel/Search";
import Purchase from "../PageObjectModel/Purchase";
import Checkout from "../PageObjectModel/CheckOut";
import Rate from "../PageObjectModel/Rate";
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
    ob1.setEmailPassword(user.email,user.password);
    ob1.confirmPassword(user.password);
    ob1.clickSubmit();
    ob1.AssertSuccess();
})
})
it('Sign in test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').should('be.visible').click();
    const ob2=new SignIn;
    ob2.typeinEmailField(user.email);
    ob2.fillPassword(user.password);
    ob2.clickSignin();
    ob2.AssertSuccess(user.firstName,user.lastName);
})
})
it('Search test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').click();
    const signIn= new SignIn;
    const search= new Search;
    signIn.typeinEmailField(user.email);
    signIn.fillPassword(user.password);
    signIn.clickSignin();
    signIn.AssertSuccess(user.firstName,user.lastName);
    search.assertValidSignIn();
    search.typeInSearchBar(user.searchWord);
    search.getSearchedItem();
    search.assertProductName(user.searchWord);
    search.assertValidSignIn();
    search.clickAddtoWishlist();
    search.assertSuccessAdd();
})
})
it('Purchase test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').click();
    const signIn= new SignIn;
    const purchase=new Purchase;
    signIn.typeinEmailField(user.email);
    signIn.fillPassword(user.password);
    signIn.clickSignin();
    signIn.AssertSuccess(user.firstName,user.lastName);
    purchase.clickTab();
    purchase.selectCategory();
    purchase.selectItem();
    purchase.selectSize();
    purchase.selectColor();
    purchase.setQuantity();
    purchase.assertSelectedSize();
    purchase.assertSelectedColor();
    purchase.clickAddToCart();
    purchase.clickOnCart();
    purchase.deleteItems();
    purchase.confirmDeletion();
    purchase.assertCorrectDeletion();
})
})
it('checkout test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').click();
    const signIn= new SignIn;
    const purchase=new Purchase;
    const checkout=new Checkout;
    signIn.typeinEmailField(user.email);
    signIn.fillPassword(user.password);
    signIn.clickSignin();
    signIn.AssertSuccess(user.firstName,user.lastName);
    purchase.clickTab();
    purchase.selectCategory();
    purchase.selectItem();
    purchase.selectSize();
    purchase.selectColor();
    purchase.setQuantity();
    purchase.assertSelectedSize();
    purchase.assertSelectedColor();
    purchase.clickAddToCart();
    purchase.clickOnCart();
    checkout.goToCartPage();
    checkout.fillFirstNameField(user.firstName);
    checkout.fillLastName(user.lastName);
    checkout.selectCountry(user.country);
    checkout.fillAddress(user.building,user.floor,user.street);
    checkout.fillcity(user.city);
    checkout.fillPostCode(user.zip);
    checkout.fillTelephone(user.phone);
    checkout.clickNextBTN();
    checkout.clickPlaceOrder();
    checkout.assertSuccessfullCheckout();
})
})
it.only('Rate product test',()=>{
    cy.visit('/')
    cy.get('@user').then((user)=>{
    cy.contains('Sign In ').click();
    const signIn= new SignIn;
    const purchase=new Purchase;
    const rate=new Rate;
    signIn.typeinEmailField(user.email);
    signIn.fillPassword(user.password);
    signIn.clickSignin();
    signIn.AssertSuccess(user.firstName,user.lastName);
    purchase.clickTab();
    purchase.selectCategory();
    purchase.selectItem();
    rate.clickReviewTab();
    rate.give4Star();
    rate.typeName(user.firstName);
    rate.typeSummary();
    rate.typeReview();
    rate.clickSubmitReview();
    rate.assertSuccessReview()
})
})