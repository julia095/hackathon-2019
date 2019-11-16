import * as gs from '../integration/selectors/PageElements';

Cypress.Commands.add("login", () => {
    cy.visit('https://demo.applitools.com/hackathon.html');
    cy.get(gs.inputUserName).type('user');
    cy.get(gs.inputPassword).type('password');
    cy.get(gs.btnSignIn).click();
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
