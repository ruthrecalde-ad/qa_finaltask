class product 
{
    elements =
    {
        imgBlock:       () => cy.get('.inventory_details_img_container'),
        backBtn:        () => cy.get('.back-image'),
        backTitle:      () => cy.get('[data-test="back-to-products"]'),
        cardTitles:     () => cy.get('[data-test="inventory-item-name'),
        cardDescription:() => cy.get('[data-test="inventory-item-desc'),
        cardPrice:      () => cy.get('[data-test="inventory-item-price'),
        add2CartBtn:    () => cy.get('[data-test="add-to-cart"]'),
        title:          () => cy.get('[data-test="title"]'),
        qtyLabel:       () => cy.get('[data-test="cart-quantity-label"]'),
        descLabel:      () => cy.get('[data-test="cart-desc-label"]'),
        cartIconBtn:    () => cy.get('[data-test="shopping-cart-link"]'),
        contShopBtn:    () => cy.get('[data-test="continue-shopping"]'),
        checkoutBtn:    ()=> cy.get('[data-test="checkout"]')

    }

    verifyElements(searchedItem){
        this.elements.backBtn().should('be.visible').and('not.be.disabled');
        this.elements.backTitle().should('be.visible').and('contain.text', 'Back to products');
        this.elements.cartIconBtn().should('be.visible').and('not.be.disabled');
        this.elements.imgBlock().should('be.visible');
        this.elements.cardTitles().should('be.visible').and('contain.text', searchedItem);
        this.elements.cardDescription().should('be.visible');
        this.elements.cardPrice().should('be.visible').and('contain.text', '$');
        this.elements.add2CartBtn().should('be.visible').and('have.text', 'Add to cart').and('not.be.disabled');
        this.elements.backBtn().click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    }

    verifyEmptyCart(){
        this.elements.cartIconBtn().click();
        this.elements.title().should('be.visible').and('contain.text', 'Your Cart');
        this.elements.qtyLabel().should('be.visible').and('contain.text', 'QTY');
        this.elements.descLabel().should('be.visible').and('contain.text', 'Description');
        this.elements.contShopBtn().should('be.visible').and('not.be.disabled').and('contain.text', 'Continue Shopping');
        this.elements.checkoutBtn().should('be.visible').and('not.be.disabled').and('contain.text', 'Checkout');
        this.elements.contShopBtn().click();
    }
}
module.exports = new product();