class SignIn
{
    //Loators
    emailField="#email"
    passwordField="#pass"
    loginBTN="#send2"
    loginLBL=".logged-in"


    //Elements Getters
    getEmailField()
    {
        return cy.get(this.emailField)
    }

    getPassField()
    {
        return cy.get(this.passwordField);
    }

    getSignInBTN()
    {
        return cy.get(this.loginBTN);
    }

    getLoginLBL()
    {
        return cy.get(this.loginLBL)
    }

    //Interactions
    typeinEmailField(mail)
    {
        this.getEmailField().type(mail).should('be.visible')
    }

    fillPassword(pass)
    {
        this.getPassField().should('be.visible').type(pass);
    }
    clickSignin()
    {
        this.getSignInBTN().first().should('be.visible').click();
    }
    AssertSuccess(fName,lName)
    {
        this.getLoginLBL().should('contain.text','Welcome, ',fName+lName+'!');
    }
}export default SignIn;