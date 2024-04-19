class Checkout{

    //Locators
    CartPageBTN="#top-cart-btn-checkout"
    firstNameField="[name=firstname]"
    lastNameField="[name=lastname]"
    countryField="[name=country_id]"
    addressFields=".input-text"
    cityField="[name=city]"
    postCodeField="[name=postcode]"
    phoneField="[name=telephone]"
    nextBTN="[data-role=opc-continue]"
    placeOrderBTN="Place Order"

    goToCartPage()
    {
        cy.get(this.CartPageBTN).wait(3000).click({force:true});
    }

    fillFirstNameField(firstname)
    {
        cy.wait(10000).get(this.firstNameField).clear().type(firstname);
    }

    fillLastName(lastname)
    {
        cy.get(this.lastNameField).clear().type(lastname);
    }

    selectCountry(country)
    {
        cy.get(this.countryField).select(country)
    }

    fillAddress(building,floor,street)
    {
        cy.get(this.addressFields).eq(5).clear().type(building);
        cy.get(this.addressFields).eq(6).clear().type(floor);
        cy.get(this.addressFields).eq(7).clear().type(street);
    }

    fillcity(city)
    {
        cy.get(this.cityField).type(city);
    }

    fillPostCode(zip)
    {
        cy.get(this.postCodeField).type(zip);
    }

    fillTelephone(phone)
    {
        cy.get(this.phoneField).type(phone);
    }

    clickNextBTN()
    {
        cy.get(this.nextBTN).click()
    }

    clickPlaceOrder()
    {
        cy.contains(this.placeOrderBTN,{timeout:10000}).click();
    }

    assertSuccessfullCheckout()
    {
        cy.contains('Your order number is: ',{timeout:10000}).should('be.visible');
    }
}export default Checkout