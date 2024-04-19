class Search
{
    //Locators
    searchBar="#search"
    itemPath=":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo"
    searchedProductName=".base"
    addToWishlistBTN="Add to Wish List"
    successMessage=".message-success"
    loggedInMessage=".logged-in"

    assertValidSignIn()
    {
        cy.get(this.loggedInMessage,{timeout:10000}).should('be.visible');
    }
    
    typeInSearchBar(word)
    {
        cy.get(this.searchBar).should('be.visible').type(word+'{enter}');
    }

    getSearchedItem()
    {
        cy.get(this.itemPath).click();
    }

    assertProductName(word)
    {
        cy.get(this.searchedProductName).should('include.text',word)//The word it asserts is case sensitive.
    }

    clickAddtoWishlist()
    {
        cy.contains(this.addToWishlistBTN).click();
    }

    assertSuccessAdd()
    {
        cy.get(this.successMessage).should('be.visible');
    }
}export default Search;