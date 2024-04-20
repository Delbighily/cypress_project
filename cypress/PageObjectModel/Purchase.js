class Purchase
{
    //Locators
    upperTab="#ui-id-5 > :nth-child(2)"
    categories=".categories-menu > :nth-child(2) > :nth-child(2) > a"
    itemSelection=":nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo"
    sizeSelector="#option-label-size-143-item-168"
    colorSelector="#option-label-color-93-item-53"
    quantityField="#qty"
    selectedLBL=".swatch-attribute-selected-option"
    addToCartBTN="#product-addtocart-button"
    cartBTN=".counter-number"
    deleteItemBTN="[title=\"Remove item\"]"
    actionBTN=".action-accept"
    cartCheck=".block-minicart.block"

    //Elements Getters
    getUpperTab()
    {
        return cy.get(this.upperTab);
    }
    getCategories()
    {
        return cy.get(this.categories);
    }
    getItemSelection()
    {
        return cy.get(this.itemSelection);
    }
    getSizeSelector()
    {
        return cy.get(this.sizeSelector);
    }
    getColorSelector()
    {
        return cy.get(this.colorSelector);
    }
    getQuantityField()
    {
        return cy.get(this.quantityField);
    }
    getSelectedLBL()
    {
        return cy.get(this.selectedLBL);
    }
    getAddToCartBTN()
    {
        return cy.get(this.addToCartBTN);
    }
    getCartBTN()
    {
        return cy.get(this.cartBTN);
    }
    getDeleteItemBTN()
    {
        return cy.get(this.deleteItemBTN);
    }
    getActionBTN()
    {
        return cy.get(this.actionBTN);
    }
    getCartCheck()
    {
        return cy.get(this.cartCheck);
    }

    //Interactions
    clickTab()
    {
        this.getUpperTab().click();
    }

    selectCategory()
    {
        this.getCategories().click();
    }

    selectItem()
    {
        this.getItemSelection().click();
    }

    selectSize()
    {
        this.getSizeSelector().wait(1000).click();
    }

    selectColor()
    {
        this.getColorSelector().wait(1000).click();
    }

    setQuantity()
    {
        this.getQuantityField().wait(1000).clear().type('3');
    }

    assertSelectedSize()
    {
        this.getSelectedLBL().first().should('contain','M');
    }

    assertSelectedColor()
    {
        this.getSelectedLBL().last().should('contain','Green');
    }

    clickAddToCart()
    {
        this.getAddToCartBTN().wait(500).click();
    }

    clickOnCart()
    {
        this.getCartBTN().click();
    }

    deleteItems()
    {
        this.getDeleteItemBTN().click();
    }

    confirmDeletion()
    {
        this.getActionBTN().click();
    }

    assertCorrectDeletion()
    {
        this.getCartCheck().should('contain','You have no items in your shopping cart.')
    }
}export default Purchase;
