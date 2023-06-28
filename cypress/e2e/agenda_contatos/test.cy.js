/// <reference types="cypress" />

describe('Teste funcionalidades de agenda de contatados', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });
    
    it('Deve acessar a aplicação e exibir lista pre-existente', () => {});

    it('Deve incluir um contato', () => {
        cy.get('[type="text"]').type('Will');
        cy.get('[type="email"]').type('Will@email.com');
        cy.get('[type="tel"]').type("77999998888");
        cy.get('.adicionar').click();
    });


    it('Deve remover um contato', () => {
        cy.get('.delete').first().click();
    });

    it('Deve incluir um contato', () => {
        cy.get('[type="text"]').type('HSG');
        cy.get('[type="email"]').type('HSG@email.com');
        cy.get('[type="tel"]').type("88777779999");
        cy.get('.adicionar').click();
    });


    it('Deve editar um contato', () => {
        cy.get('.edit').first().click();
        cy.get('[type="text"]').clear().type('F');
        cy.get('[type="email"]').clear().type('F@email.com');
        cy.get('[type="tel"]').clear().type("99777778888");
        cy.get('.alterar').click();

    });
})