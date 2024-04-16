class Signup
{
    checkPageTitle()
    {
        cy.title().should('eql','Create New Customer Account')
    }
    setUserName(fName,lName)
    {
        cy.get('#firstname').should('be.visible').type(fName);
        cy.get('#lastname').should('be.visible').type(lName);
    }
    setEmailPasswprd(mail,pass)
    {
        cy.get('#email_address').should('be.visible').type(mail);
        cy.get('#password').should('be.visible').type(pass);
    }
    confirmPassword(pass)
    {
        cy.get('#password-confirmation').should('be.visible').type(pass);
    }
    clickSubmit()
    {
        cy.get('.submit').click();
    }
    AssertSuccess()
    {
        cy.get('.message-success').should('contain','Thank you for registering with Main Website Store.')
        cy.title().should('eql','My Account')
    }
}export default Signup;