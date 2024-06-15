/// <reference types="cypress" />
import login from "../../fixtures/login.json";
import usuario from "../../fixtures/usuarios.json";

describe('Teste de ponta a ponta no Saucelab', () => {

    beforeEach(() => {
        cy.login(login.usuario, login.senha)
    });

    it('Deve fazer um pedido de ponta a ponta', () => {

        cy.escolherProduto('Sauce Labs Fleece Jacket')
        cy.escolherProduto('Sauce Labs Onesie')
        cy.escolherProduto('Test.allTheThings() T-Shirt (Red)')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.cadastro(usuario[2].nome, usuario[2].sobrenome, usuario[2].cep)
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    });

});

