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

    //Elements Getters
    getCartPageBTN()
    {
        return cy.get(this.CartPageBTN);
    }
    getFirstNameField()
    {
        return cy.get(this.firstNameField);
    }
    getLastNameField()
    {
        return cy.get(this.lastNameField);
    }
    getCountryField()
    {
        return cy.get(this.countryField);
    }
    getAddressFields()
    {
        return cy.get(this.addressFields);
    }
    getCityField()
    {
        return cy.get(this.cityField);
    }
    getPostCodeField()
    {
        return cy.get(this.postCodeField);
    }
    getPhoneField()
    {
        return cy.get(this.phoneField);
    }
    getNextBTN()
    {
        return cy.get(this.nextBTN);
    }
    getPlaceOrderBTN()
    {
        return cy.contains(this.placeOrderBTN,{timeout:10000});
    }

    //Interactions
    goToCartPage()
    {
        this.getCartPageBTN().wait(3000).click({force:true});
    }

    fillFirstNameField(firstname)
    {
        this.getFirstNameField().wait(10000).clear().type(firstname);
    }

    fillLastName(lastname)
    {
        this.getLastNameField().clear().type(lastname);
    }

    selectCountry(country)
    {
        this.getCountryField().select(country)
    }

    fillAddress(building,floor,street)
    {
        this.getAddressFields().eq(5).clear().type(building);
        this.getAddressFields().eq(6).clear().type(floor);
        this.getAddressFields().eq(7).clear().type(street);
    }

    fillcity(city)
    {
        this.getCityField().type(city);
    }

    fillPostCode(zip)
    {
        this.getPostCodeField().type(zip);
    }

    fillTelephone(phone)
    {
        this.getPhoneField().type(phone);
    }

    clickNextBTN()
    {
        this.getNextBTN().click()
    }

    clickPlaceOrder()
    {
        this.getPlaceOrderBTN().click();
    }

    assertSuccessfullCheckout()
    {
        cy.contains('Your order number is: ',{timeout:10000}).should('be.visible');
    }
}export default Checkout;
