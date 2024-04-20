class Signup
{
    //Locators 
    fnameField="#firstname"
    lnameField="#lastname"
    emailField="#email_address"
    passwordField="#password"
    passwordConfiField="#password-confirmation"
    submitBTN=".submit"
    successMessage=".message-success"

    //Elements Getters
    getFnameField()
    {
        return cy.get(this.fnameField);
    }
    getLnameField()
    {
        return cy.get(this.lnameField);
    }
    getEmailField()
    {
        return cy.get(this.emailField);
    }
    getPassField()
    {
        return cy.get(this.passwordField);
    }
    getConfPassField()
    {
        return cy.get(this.passwordConfiField);
    }
    getSubmitBTN()
    {
        return cy.get(this.submitBTN);
    }
    getSuccessMSG()
    {
        return cy.get(this.successMessage);
    }
    



    //Interactions
    checkPageTitle()
    {
        cy.title().should('eql','Create New Customer Account')
    }
    setUserName(fName,lName)
    {
        this.getFnameField().should('be.visible').type(fName);
        this.getLnameField().should('be.visible').type(lName);
    }
    setEmailPassword(mail,pass)
    {
        this.getEmailField().should('be.visible').type(mail);
        this.getPassField().should('be.visible').type(pass);
    }
    confirmPassword(pass)
    {
        this.getConfPassField().should('be.visible').type(pass);
    }
    clickSubmit()
    {
        this.getSubmitBTN().click();
    }
    AssertSuccess()
    {
        this.getSuccessMSG().should('contain','Thank you for registering with Main Website Store.')
        cy.title().should('eql','My Account')
    }
}export default Signup;