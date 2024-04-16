class Signup
{
    //Locators 
    fnameField="#firstname"
    lnameField="#lastname"
    emailField="#email_address"
    passwordField="#password"
    passwordConfiField="#password-confirmation"
    submitBTN=".submit"

    checkPageTitle()
    {
        cy.title().should('eql','Create New Customer Account')
    }
    setUserName(fName,lName)
    {
        cy.get(this.fnameField).should('be.visible').type(fName);
        cy.get(this.lnameField).should('be.visible').type(lName);
    }
    setEmailPasswprd(mail,pass)
    {
        cy.get(this.emailField).should('be.visible').type(mail);
        cy.get(this.passwordField).should('be.visible').type(pass);
    }
    confirmPassword(pass)
    {
        cy.get(this.passwordConfiField).should('be.visible').type(pass);
    }
    clickSubmit()
    {
        cy.get(this.submitBTN).click();
    }
    AssertSuccess()
    {
        cy.get('.message-success').should('contain','Thank you for registering with Main Website Store.')
        cy.title().should('eql','My Account')
    }
}export default Signup;