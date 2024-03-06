// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
  cy.get('input[id="firstName"]').type("Airam");
  cy.get('input[id="lastName"]').type("Toscano");
  cy.get('input[id="email"]').type("airamlobato@gmail.com");
  cy.get('input[id="phone"]').type("123123123123");
  cy.get('textarea[id="open-text-area"]').type(
    "gostaria de cancelar meu cartao"
  );
  cy.get("button").click();
});
