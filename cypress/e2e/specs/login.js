class login 
{
    elements =
    {
        loginLogo: () => cy.get('.login_logo'),
        username: () => cy.get('input[data-test="username"]'),
        password: () => cy.get('input[data-test="password"]'),
        loginBtn: () => cy.get('input[data-test="login-button"]'),
        loginCred: () => cy.get('[data-test="login-credentials"]'),
        loginPass: () => cy.get('[data-test="login-password"]')
    }

    verifyText(){
        this.elements.loginLogo().should('be.visible').and('contain.text', 'Swag Labs');
        this.elements.loginCred().should('be.visible').and('contain.text', 'Accepted usernames are:');
        this.elements.loginPass().should('be.visible').and('contain.text', 'Password for all users:');
    }

    verifyFormElements(){
        this.elements.username().should('be.visible');
        this.elements.password().should('be.visible');
        this.elements.loginBtn().should('be.visible').and('have.value', 'Login');
    }
    
}

module.exports = new login();