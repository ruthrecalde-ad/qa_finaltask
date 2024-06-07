import product from "../page-objects/product"

describe('Product', () => {
  it('1- Verify product page', () => {
    cy.visit('/');
    cy.login('standard_user','secret_sauce');
    const searchedItem = 'Sauce Labs Fleece Jacket';
    cy.clickonProduct(searchedItem);
    product.verifyElements(searchedItem);
    product.verifyEmptyCart();
  })

  it('2- Add item and then delete it from PLP',() => {
    cy.visit('/');
    cy.login('standard_user','secret_sauce');
    let item = 'Sauce Labs Fleece Jacket';
    cy.addItem2Cart(item);
    cy.removeItemPLP(item);
  })

  it('3- Add item and delete it from Cart Icon',() => {
    cy.visit('/');
    cy.login('standard_user','secret_sauce');
    let item = 'Sauce Labs Fleece Jacket';
    cy.addItem2Cart(item);
    cy.verifyItemCart(item);
    cy.removeFromCart(item);
  })
})
