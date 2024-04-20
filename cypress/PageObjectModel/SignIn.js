class SignIn
{
    //Loators
    emailField="#email"
    passwordField="#pass"
    loginBTN="#send2"

    getEmailField()
    {
        return cy.get(this.emailField)
        //should('be.visible')
    }

    typeinEmailField(mail)
    {
        this.getEmailField().type(mail)
    }

    fillPassword(pass)
    {
        cy.get(this.passwordField).should('be.visible').type(pass);
    }
    clickSignin()
    {
        cy.get(this.loginBTN).should('be.visible').first().click();
    }
    AssertSuccess(fName,lName)
    {
        cy.get('.logged-in').should('contain.text','Welcome, ',fName+lName+'!');
    }
}export default SignIn;