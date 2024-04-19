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


    clickTab()
    {
        cy.get(this.upperTab).click();
    }

    selectCategory()
    {
        cy.get(this.categories).click();
    }

    selectItem()
    {
        cy.get(this.itemSelection).click();
    }

    selectSize()
    {
        cy.get(this.sizeSelector).wait(1000).click();
    }

    selectColor()
    {
        cy.get(this.colorSelector).wait(1000).click();
    }

    setQuantity()
    {
        cy.get(this.quantityField).wait(1000).clear().type('3');
    }

    assertSelectedSize()
    {
        cy.get(this.selectedLBL).first().should('contain','M');
    }

    assertSelectedColor()
    {
        cy.get(this.selectedLBL).last().should('contain','Green');
    }

    clickAddToCart()
    {
        cy.get(this.addToCartBTN).wait(500).click();
    }

    clickOnCart()
    {
        cy.get(this.cartBTN).click();
    }

    deleteItems()
    {
        cy.get(this.deleteItemBTN).click();
    }

    confirmDeletion()
    {
        cy.get(this.actionBTN).click();
    }

    assertCorrectDeletion()
    {
        cy.get(this.cartCheck).should('contain','You have no items in your shopping cart.')
    }
}export default Purchase