import catalog, { verify } from "../page-objects/catalog"

describe('Homepage', () => {
  
  it('1- Verify Header', () => {
    cy.login('standard_user','secret_sauce');
    catalog.verifyHeader();
  })

  it('2- Verify Hamburger Menu', () => {
    cy.login('standard_user','secret_sauce');
    catalog.verifyHammenu();
    catalog.verifyItemsRst();
    //catalog.verifyAboutbtn();
  })

  it('3- Verify Footer', () => {
    cy.login('standard_user','secret_sauce');
    cy.verifyFooter();
  })

  it('4- Visualize elements correctly', () => {
    cy.login('standard_user','secret_sauce');
    catalog.verifyProductsVisibility();
  })

  it('5- Verify Sorting Function A to Z', () => {
    cy.login('standard_user','secret_sauce');
    catalog.verifySortAZ();
  })

  it('6- Verify Sorting Function Z to A', () => {
    cy.login('standard_user','secret_sauce');
    catalog.verifySortZA();
  })

  it('7- Verify Sorting Function Low to High', () => {
    cy.login('standard_user','secret_sauce');
    catalog.verifySortLow2High();
  })

  it('8- Verify Sorting Function High to Low', () => {
    cy.login('standard_user','secret_sauce');
    catalog.verifySortHigh2Low();
  })

  it('9- Verify if product link is correct', () => {
    cy.login('standard_user','secret_sauce');
    cy.clickonProduct('Sauce Labs Backpack');
  })


})

