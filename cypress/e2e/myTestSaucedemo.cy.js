describe('Actividad proyecto final', {testIsolation: false}, () => {
    
    it('Visitar pagina', () => {
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.visit('https://www.saucedemo.com/', { timeout: 120000 });
    });

    it('Ingresar usuario y contrasenia', () => {
        cy.get('[placeholder="Username"]').type('standard_user');
        cy.get('[placeholder="Password"]').type('secret_sauce');
        cy.get('input[type="submit"]').click();
    });
    
    it("Verificar login y agregar al carrito", () => {
        cy.get('.app_logo').contains("Swag Labs")
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#add-to-cart-sauce-labs-bike-light").click()
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    });

    it("Verificar carrito y hacer checkout", () =>{
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('#checkout').click()

        cy.get('[data-test="firstName"]').type('Gaston Cesar');
        cy.get('[data-test="lastName"]').type('Pralong');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();
        cy.get("#finish").click();
        cy.get("h2").contains("Thank you for your order!")
        cy.get("#back-to-products").click();
        
        //ahora veficiamos que se haya comprado con el carrito = 0
        cy.get('.shopping_cart_badge').should('not.exist');

        //logout
        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").click();
    });
});
