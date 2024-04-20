
class Search
{
    //Locators
    searchBar="#search"
    itemPath=":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo"
    searchedProductName=".base"
    addToWishlistBTN="Add to Wish List"
    successMessage=".message-success"
    loggedInMessage=".logged-in"

    //Elements Getters
    getSearchBar()
    {
        return cy.get(this.searchBar);
    }
    getItemPath()
    {
        return cy.get(this.itemPath);
    }
    getSearchedProductName()
    {
        return cy.get(this.searchedProductName);
    }
    getAddToWishlistBTN()
    {
        return cy.contains(this.addToWishlistBTN);
    }
    getSuccessMessage()
    {
        return cy.get(this.successMessage);
    }
    getLoggedInMessage()
    {
        return cy.get(this.loggedInMessage,{timeout:10000});
    }

    //Interactions
    assertValidSignIn()
    {
        this.getLoggedInMessage().should('be.visible');
    }
    
    typeInSearchBar(word)
    {
        this.getSearchBar().should('be.visible').type(word+'{enter}');
    }

    getSearchedItem()
    {
        this.getItemPath().click();
    }

    assertProductName(word)
    {
        this.getSearchedProductName().should('include.text',word)//The word it asserts is case sensitive.
    }

    clickAddtoWishlist()
    {
        this.getAddToWishlistBTN().click();
    }

    assertSuccessAdd()
    {
        this.getSuccessMessage().should('be.visible');
    }
}export default Search;