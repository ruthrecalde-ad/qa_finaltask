import login from "../specs/login"

describe('Homepage', () => {
  it('1- Verify content and form elements', () => {
    cy.visit('/');

    login.verifyText();
    login.verifyFormElements();
  })
})