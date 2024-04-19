class Rate{
    
    //Locators
    reviewTab="#tab-label-reviews-title"
    ratingStar="#Rating_4_label"
    nickNameField="#nickname_field"
    summaryField="#summary_field"
    reviewField="#review_field"
    submitReviewBTN=".actions-primary > .action > span"
    successMessage=".message-success"


    clickReviewTab()
    {
        cy.get(this.reviewTab).click();
    }

    give4Star()
    {
        cy.get(this.ratingStar).click({force:true});
    }

    typeName(name)
    {
        cy.get(this.nickNameField).wait(3000).clear().type(name)
    }

    typeSummary()
    {
        cy.get(this.summaryField).wait(1000).type('good value for the money');
    }

    typeReview()
    {
        cy.get(this.reviewField).wait(1000).type('would really recommend it to my friends');
    }

    clickSubmitReview()
    {
        cy.get(this.submitReviewBTN).click();
    }

    assertSuccessReview()
    {
        cy.get(this.successMessage).should('be.visible');
    }
}export default Rate