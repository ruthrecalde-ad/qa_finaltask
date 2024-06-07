class checkout 
{
    elements =
    {
        cartBadge:      () => cy.get('[data-test="shopping-cart-badge"]'),
        checkoutBtn:    () => cy.get('[data-test="checkout"]'),
        title:          () => cy.get('[data-test="title"]'),
        formFirstName:  () => cy.get('[data-test="firstName"]'),
        formLastName:   () => cy.get('[data-test="lastName"]'),
        formZipcode:    () => cy.get('[data-test="postalCode"]'),
        cancelBtn:      () => cy.get('[data-test="cancel"]'),
        continueBtn:    () => cy.get('[data-test="continue"]'),
        errorMsg:       () => cy.get('[data-test="error"]'),
        cartItem:       () => cy.get('.cart_item'),
        quantity:       () => cy.get('[data-test="cart-quantity-label"]'),
        description:    () => cy.get('[data-test="cart-desc-label"]'),
        paymentInfo:    () => cy.get('[data-test="payment-info-label"]'),
        paymentInfoValue:()=> cy.get('[data-test="payment-info-value"]'),
        shipInfo:       () => cy.get('[data-test="shipping-info-label"]'),
        shipInfoValue:  () => cy.get('[data-test="shipping-info-value"]'),
        priceInfo:      () => cy.get('[data-test="total-info-label"]'),
        itemTotal:      () => cy.get('[data-test="subtotal-label"]'),
        tax:            () => cy.get('[data-test="tax-label"]'),
        total:          () => cy.get('[data-test="total-label"]'),
        finishBtn:      () => cy.get('[data-test="finish"]')
    }

    add3Items(item1, item2, item3){
        cy.addItem2Cart(item1);
        cy.verifyItemCart(item1);
        cy.addItem2Cart(item2);
        cy.verifyItemCart(item2);
        cy.addItem2Cart(item3);
        cy.verifyItemCart(item3);
        this.elements.cartBadge().should('be.visible').and('contain.text', '3');
        this.elements.cartBadge().click();
        this.elements.checkoutBtn().click();
    }
    
    verifyCheckout1Elements(){
        this.elements.cartBadge().click();
        this.elements.checkoutBtn().click();
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');
        this.elements.title().should('be.visible');
        this.elements.formFirstName().should('be.visible').and('not.be.disabled');
        this.elements.formLastName().should('be.visible').and('not.be.disabled');
        this.elements.cancelBtn().should('be.visible').and('not.be.disabled');
        this.elements.continueBtn().should('be.visible').and('not.be.disabled');
        this.elements.cancelBtn().click();
    }

    verifyCheckout1Form(){
        this.elements.checkoutBtn().click();
        this.elements.continueBtn().click();
        this.elements.errorMsg().should('exist').and('have.text', 'Error: First Name is required'); 
        this.elements.formFirstName().type('Maria');
        this.elements.continueBtn().click();
        this.elements.errorMsg().should('exist').and('have.text', 'Error: Last Name is required'); 
        this.elements.formLastName().type('Benitez');
        this.elements.continueBtn().click();
        this.elements.errorMsg().should('exist').and('have.text', 'Error: Postal Code is required'); 
        this.elements.cancelBtn().click();
        this.elements.checkoutBtn().click();
    }
    
    VerifyCheckout2Elements(){
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
        this.elements.title().should('be.visible').and('contain','Checkout: Overview');
        this.elements.quantity().should('be.visible').and('contain','QTY');
        this.elements.description().should('be.visible').and('contain','Description');
        this.elements.cartItem().each(($el, index, $list) => {
            // Verify the visibility of the item quantity
            cy.wrap($el).find('.cart_quantity[data-test="item-quantity"]').should('be.visible');
      
            // Verify the visibility of the item name
            cy.wrap($el).find('.inventory_item_name[data-test="inventory-item-name"]').should('be.visible');
      
            // Verify the visibility of the item description
            cy.wrap($el).find('.inventory_item_desc[data-test="inventory-item-desc"]').should('be.visible');
      
            // Verify the visibility of the item price
            cy.wrap($el).find('.inventory_item_price[data-test="inventory-item-price"]').should('be.visible');
          });
        this.elements.paymentInfo().should('be.visible').and('contain','Payment Information:');
        this.elements.paymentInfoValue().should('be.visible');
        this.elements.shipInfo().should('be.visible').and('contain','Shipping Information:');
        this.elements.shipInfoValue().should('be.visible');
        this.elements.priceInfo().should('be.visible').and('contain','Price Total');
        this.elements.itemTotal().should('be.visible').and('contain','Item total: $');
        this.elements.tax().should('be.visible').and('contain','Tax: $');
        this.elements.total().should('be.visible').and('contain','Total: $');
        this.elements.cancelBtn().should('be.visible').and('not.be.disabled');
        this.elements.finishBtn().should('be.visible').and('not.be.disabled');
        this.elements.cancelBtn().click();
        cy.url().should('eq','https://www.saucedemo.com/inventory.html');
    }
    

    // this.elements.formFirstName().should('be.visible').and('not.be.disabled');
    // this.elements.formLastName().should('be.visible').and('not.be.disabled');
    // this.elements.cancelBtn().should('be.visible').and('not.be.disabled');
    // this.elements.continueBtn().should('be.visible').and('not.be.disabled');
    // this.elements.cancelBtn().click();
}
module.exports = new checkout();