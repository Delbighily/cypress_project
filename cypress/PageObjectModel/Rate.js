class Rate{
    
    //Locators
    reviewTab="#tab-label-reviews-title"
    ratingStar="#Rating_4_label"
    nickNameField="#nickname_field"
    summaryField="#summary_field"
    reviewField="#review_field"
    submitReviewBTN=".actions-primary > .action > span"
    successMessage=".message-success"

    //Elements Getters
    getReviewTab()
    {
        return cy.get(this.reviewTab);
    }
    getRatingStar()
    {
        return cy.get(this.ratingStar);
    }
    getNickNameField()
    {
        return cy.get(this.nickNameField);
    }
    getSummaryField()
    {
        return cy.get(this.summaryField);
    }
    getReviewField()
    {
        return cy.get(this.reviewField);
    }
    getSubmitReviewBTN()
    {
        return cy.get(this.submitReviewBTN);
    }
    getSuccessMessage()
    {
        return cy.get(this.successMessage);
    }

    //Interactions
    clickReviewTab()
    {
        this.getReviewTab().click();
    }

    give4Star()
    {
        this.getRatingStar().click({force:true});
    }

    typeName(name)
    {
        this.getNickNameField().wait(3000).clear().type(name)
    }

    typeSummary()
    {
        this.getSummaryField().wait(1000).type('good value for the money');
    }

    typeReview()
    {
        this.getReviewField().wait(1000).type('would really recommend it to my friends');
    }

    clickSubmitReview()
    {
        this.getSubmitReviewBTN().click();
    }

    assertSuccessReview()
    {
        this.getSuccessMessage().should('be.visible');
    }
}export default Rate;
