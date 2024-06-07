Cypress.Commands.add('visitHomePage', () => {
    cy.visit('/');
  });

Cypress.Commands.add('login', (user, password) => { 
    cy.visit('/');
    cy.get('input[data-test="username"]').type(user);
    cy.get('input[data-test="password"]').type(password);
    cy.get('input[data-test="login-button"]').click();
 })

Cypress.Commands.add('verifyAddToCartBtn', () => {
  cy.get('button[data-test^="add-to-cart-"]').each(($btn) => {
    cy.wrap($btn)
      .should('be.visible')
      .and('have.text', 'Add to cart')
      .and('not.be.disabled');
  });
});

Cypress.Commands.add('verifySortingBtn', () => {
  // Check if the dropdown is visible and has the correct options
  cy.get('select[data-test="product-sort-container"]').should('be.visible').within(() => {
    cy.get('option').should('have.length', 4);
    cy.get('option[value="az"]').should('have.text', 'Name (A to Z)');
    cy.get('option[value="za"]').should('have.text', 'Name (Z to A)');
    cy.get('option[value="lohi"]').should('have.text', 'Price (low to high)');
    cy.get('option[value="hilo"]').should('have.text', 'Price (high to low)');
  });
});

Cypress.Commands.add('getAllProducts',()=>{
  return cy.get('[data-test="inventory-item-name').then(($items) => {
    return Cypress.$.makeArray($items).map((item) => item.innerText);
  });
});

Cypress.Commands.add('getAllPrices',()=>{
  return cy.get('[data-test="inventory-item-price').then(($items) => {
    return Cypress.$.makeArray($items).map((item) => item.innerText);
  });
});

Cypress.Commands.add('verifyFooter',()=>{
  cy.get('[data-test="footer"]').should('be.visible');
  cy.get('[data-test="social-twitter"]').should('be.visible');
  cy.get('a[data-test="social-twitter"]')
      .invoke('attr', 'href')
      .then((href) => {
        expect(href).to.equal('https://twitter.com/saucelabs');
      });
  cy.get('[data-test="social-facebook"]').should('be.visible');
  cy.get('a[data-test="social-facebook"]')
      .invoke('attr', 'href')
      .then((href) => {
        expect(href).to.equal('https://www.facebook.com/saucelabs');
      });
  cy.get('[data-test="social-linkedin"]').should('be.visible');
  cy.get('a[data-test="social-linkedin"]')
      .invoke('attr', 'href')
      .then((href) => {
        expect(href).to.equal('https://www.linkedin.com/company/sauce-labs/');
      });
  cy.get('[data-test="footer-copy"]').should('be.visible').and('contain.text', 'Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
});


Cypress.Commands.add('clickonProduct', (itemName) => {
  // Find the inventory item by name and click on it
  cy.get(`[data-test="inventory-item-name"]`).contains(itemName).click();
  // Verify that the inventory item name on the new page matches the clicked item name
  cy.get('[data-test="inventory-item-name"]').should('have.text', itemName);
});

Cypress.Commands.add('addItem2Cart', (item) => {
  cy.contains('.inventory_item_name', item)
      .parents('.inventory_item_description')
      .find('button[data-test^="add-to-cart-"]')
      .click();
});

Cypress.Commands.add('verifyItemCart', (item) => {
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="title"]').should('be.visible');
  cy.get('[data-test="cart-quantity-label"]').should('be.visible');
  cy.get('[data-test="cart-desc-label"]').should('be.visible');
  cy.get('[data-test="inventory-item"]').should('be.visible');
  cy.get('[data-test="item-quantity"]').should('be.visible');
  cy.get('[data-test="inventory-item-name"]').should('be.visible');
  cy.get('[data-test="inventory-item-desc"]').should('be.visible');
  cy.get('.inventory_item_price[data-test="inventory-item-price"]').should('be.visible');
  cy.contains('.cart_item', item)
      .find('button.cart_button')
      .contains('Remove').should('be.visible').and('not.be.disabled');
  
  cy.get('[data-test="checkout"]').should('exist').and('be.visible').and('not.be.disabled');
  cy.get('[data-test="continue-shopping"]').should('exist').and('be.visible').and('not.be.disabled').click();
});

Cypress.Commands.add('removeItemPLP', (item) => {
  cy.contains('.inventory_item_name', item)
      .parents('.inventory_item_description')
      .find('[data-test^="remove-"]')
      .click();

  cy.contains('.inventory_item_name', item)
      .parents('.inventory_item_description')
      .find('button[data-test^="add-to-cart-"]')
      .should('be.visible').and('not.be.disabled').and('contain.text', 'Add to cart');;
});

Cypress.Commands.add('removeFromCart',(item) => {
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.contains('.cart_item', item)
      .find('button.cart_button')
      .contains('Remove').click();
  cy.get('[data-test="continue-shopping"]').should('exist').and('be.visible').and('not.be.disabled').click();
});

Cypress.Commands.add('fillCheckoutForm1',(firstName,lastName,postalCode) => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);
  cy.get('[data-test="continue"]').click();
});

Cypress.Commands.add('finishCheckout',() => {
  cy.get('[data-test="finish"]').click();
  cy.get('[data-test="title"]').should('be.visible').and('have.text', 'Checkout: Complete!'); 
  cy.get('[data-test="pony-express"]').should('be.visible');
  cy.get('[data-test="complete-header"]').should('be.visible');
  cy.get('[data-test="complete-text"]').should('be.visible');
  cy.get('[data-test="back-to-products"]').should('be.visible').and('not.be.disabled');
});

