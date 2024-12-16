describe('Actividad proyecto final', {testIsolation: false}, () => {
    
    it('Visitar pagina', () => {
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.visit('https://www.saucedemo.com/', { timeout: 120000 });
    });

    it('Ingresar usuario y contrasenia', () => {
        cy.get('[placeholder="Username"]').type('problem_user');
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

        //A PARTIR DE ESTE PUNTO NO SE PUEDE CONTINUAR CON UNA COMPRA NORMAL DE 3 PRODUCTOS

        /*Se deberia de reporar el bug, ademas al seleccionar el 3er item no aparece como "remover"
        en la pagina principal. Ademas de presentar muchos de otros tipos de bugs.
        */
    
    });
});