class login 
{
    elements =
    {
        loginLogo: () => cy.get('.login_logo'),
        username: () => cy.get('input[data-test="username"]'),
        password: () => cy.get('input[data-test="password"]'),
        loginBtn: () => cy.get('input[data-test="login-button"]'),
        loginCred: () => cy.get('[data-test="login-credentials"]'),
        loginPass: () => cy.get('[data-test="login-password"]'),
        errorMsg: () => cy.get('.error-message-container'),
        currentURL: () => cy.url(),
        hamMenu: () => cy.get('#react-burger-menu-btn'),
        logoutBtn: () => cy.get('#logout_sidebar_link')
        
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

    emptyFields(){
        this.elements.loginBtn().click();
        this.elements.errorMsg().should('be.visible').and('contain.text', 'Username is required');
    }

    emptyUsername(){
        const validPassword = 'secret_sauce';
        this.elements.password().type(validPassword);
        this.elements.loginBtn().click();
        this.elements.errorMsg().should('be.visible').and('contain.text', 'Username is required');
    }

    emptyPassword(){
        const validUsername = 'standard_user';
        this.elements.username().type(validUsername);
        this.elements.loginBtn().click();
        this.elements.errorMsg().should('be.visible').and('contain.text', 'Password is required');
    }

    incorrectData(){
        cy.login('invalid-Username','invalid-Username');
        this.elements.loginBtn().click();
        this.elements.errorMsg().should('be.visible').and('contain.text', 'Username and password do not match');
    }

    correctLogin(){
        cy.login('standard_user','secret_sauce');
        this.elements.currentURL().should('eq', 'https://www.saucedemo.com/inventory.html');
    }

    correctLogout(){
        this.elements.hamMenu().click();
        this.elements.logoutBtn().click();
        this.elements.currentURL().should('eq', 'https://www.saucedemo.com/');
    }

}
module.exports = new login();