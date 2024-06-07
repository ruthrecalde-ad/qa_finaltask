import checkout from "../page-objects/checkout"

describe('Checkout process', () => {

  it('1- Add items to cart and verify checkout pages',() => {
    cy.visit('/');
    cy.login('standard_user','secret_sauce');
    let item = 'Sauce Labs Fleece Jacket';
    cy.addItem2Cart(item);
    checkout.verifyCheckout1Elements();
    checkout.verifyCheckout1Form();
    cy.fillCheckoutForm1('Jane','Smith','BXE132');
    checkout.VerifyCheckout2Elements();
  });

  it('2- Add 3 items to cart and proceed to checkout',() => {
    cy.visit('/');
    cy.login('standard_user','secret_sauce');
    let item1 = 'Sauce Labs Fleece Jacket';
    let item2 = 'Sauce Labs Bolt T-Shirt';
    let item3 = 'Sauce Labs Backpack';
    checkout.add3Items(item1,item2,item3);
    cy.fillCheckoutForm1('Jane','Smith','BXE132');

    cy.finishCheckout();
  });
})
