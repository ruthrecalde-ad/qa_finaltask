class catalog 
{
    elements =
    {
        currentURL:     () => cy.url(),
        hamMenu:        () => cy.get('#react-burger-menu-btn'),
        crossBtn:       () => cy.get('#react-burger-cross-btn'),
        itemsBtn:       () => cy.get('#inventory_sidebar_link'),
        aboutBtn:       () => cy.get('#about_sidebar_link'),
        logoutBtn:      () => cy.get('#logout_sidebar_link'),
        resetBtn:       () => cy.get('#reset_sidebar_link'),
        header:         () => cy.get('.app_logo'),
        cartIcon:       () => cy.get('[data-test="shopping-cart-link"]'),
        title:          () => cy.get('[data-test="title"]'),
        sortContainer:  () => cy.get('[data-test="product-sort-container"]'),
        cardImgs:       () => cy.get('[data-test="inventory-item'),
        cardTitles:     () => cy.get('[data-test="inventory-item-name'),
        cardDescription:() => cy.get('[data-test="inventory-item-desc'),
        cardPrice:      () => cy.get('[data-test="inventory-item-price'),
    }

    verifyHeader(){
        this.elements.hamMenu().should('be.visible');
        this.elements.title().should('be.visible');   
        this.elements.header().should('be.visible').and('contain.text', 'Swag Labs');
        this.elements.cartIcon().should('be.visible'); 
        this.elements.sortContainer().should('be.visible');  
        this.elements.cartIcon().click();
        cy.url().should('eq','https://www.saucedemo.com/cart.html');
        
    }
    verifyHammenu(){
        this.elements.hamMenu().click();
        this.elements.itemsBtn().should('be.visible').and('contain.text', 'All Items');
        this.elements.aboutBtn().should('be.visible').and('contain.text', 'About');
        this.elements.logoutBtn().should('be.visible').and('contain.text', 'Logout');
        this.elements.resetBtn().should('be.visible').and('contain.text', 'Reset App State');
        this.elements.crossBtn().click();
    }
    verifyItemsRst(){
        this.elements.hamMenu().click();
        this.elements.itemsBtn().click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        this.elements.resetBtn().click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        this.elements.crossBtn().click();
    }

    verifyAboutbtn(){
        this.elements.hamMenu().click();
        this.elements.aboutBtn().click();
        cy.url().should('eq', 'https://saucelabs.com/');
    }

    verifyProductsVisibility(){
        this.elements.cardImgs().should('be.visible');
        this.elements.cardImgs().should('have.length', 6);
        this.elements.cardTitles().should('be.visible');
        this.elements.cardDescription().should('be.visible');
        this.elements.cardPrice().should('be.visible').and('contain.text', '$');
        cy.verifyAddToCartBtn();
        cy.verifySortingBtn();
    }

    verifySortAZ(){
        this.elements.sortContainer().select('az');
        // Get the product names after sorting
        cy.getAllProducts().then((names) => {
          // Make a copy of the names array and sort it
          const sortedNames = [...names].sort();
          // Compare the sorted array with the original array
          expect(names).to.deep.equal(sortedNames);
        });
    }

    verifySortZA(){
        this.elements.sortContainer().select('za');
        // Get the product names after sorting
        cy.getAllProducts().then((names) => {
          // Make a copy of the names array and sort it
          const sortedNames = [...names].sort().reverse();
          // Compare the sorted array with the original array
          expect(names).to.deep.equal(sortedNames);
        });
    }
    
    verifySortLow2High(){
        // Select the sorting option "Price (low to high)"
        this.elements.sortContainer().select('lohi');
        // Get the product prices after sorting
        cy.getAllPrices().then((prices) => {
          // Make a copy of the prices array and sort it
          const sortedPrices = [...prices].sort((a, b) => a - b);
          // Compare the sorted array with the original array
          expect(prices).to.deep.equal(sortedPrices);
        });
    }    
    
    verifySortHigh2Low(){
        // Select the sorting option "Price (high to low)"
        this.elements.sortContainer().select('hilo');
        // Get the product prices after sorting
        cy.getAllPrices().then((prices) => {
            // Make a copy of the prices array and sort it in reverse order
            const sortedPrices = [...prices].sort((a, b) => b - a);
            // Compare the sorted array with the original array
            expect(prices).to.deep.equal(sortedPrices);
        });
    }  
   
}
module.exports = new catalog();

