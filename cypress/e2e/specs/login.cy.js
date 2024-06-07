import login from "../page-objects/login"

describe('Homepage', () => {
  it('1- Verify content and form elements', () => {
    
    cy.visit('/');
    login.verifyText();
    login.verifyFormElements();
  })

  it('2- Unsuccessful Login - Empty Fields', () => {
    cy.visit('/');
    login.emptyFields();
  })

  it('3- Unsuccessful Login - Empty Username', () => {
    cy.visit('/');
    login.emptyUsername();
  })

  it('4- Unsuccessful Login - Empty Password', () => {
    cy.visit('/');
    login.emptyPassword();
  })

  it('5- Unsuccessful Login - Incorrect Data', () => {
    cy.visit('/');
    login.incorrectData();
  })

  it('6- Successful Login and Logout', () => {
    cy.visit('/');
    login.correctLogin();
    login.correctLogout();    
  })

  

})

