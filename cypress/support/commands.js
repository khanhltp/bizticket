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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('inputText', function (element, text) {
  element
    .click()
    .clear()
    .type(text)
    .invoke('val')
    .then(function (val) {
      expect(val).to.eq(text)
    })
})

Cypress.Commands.add('checkRadio', function (element) {
  element
    .check()
    .should('be.checked')
})

Cypress.Commands.add('trimSpaceAndCheckText', function(element, expected_text) {
  let removeNbsp = function (string) {
    const space = /&nbsp;\s*$/;
    if (space.test(string)) {
      return string.replace(space, '');
    } else {
      return string;
    }
  }
  element.invoke('text').then(function(text) {
    let element_text = removeNbsp(text).trim();
    cy.wrap(element_text).should('eq', expected_text)
  });
})

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})