/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
declare namespace Cypress {
    interface Chainable {

        /**
         * Custom command for getting an element by it's test specific id and will match an element with an
         * attribute like this data-testid="save-button"
         * @example cy.getDataQA('save-button');
         */
        getByDataTestId(dataTestId: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable<Cypress.Response<any>>;

        /**
         * Get the first descendant DOM element of a specific selector
         * @param selector - a selector used to filter matching descendant DOM elements
         * @example
         *    // Find the first li within the nav
         *    cy.get('#submitButton').findFirst('a');
         */
         findFirst(selector: string): Chainable<Cypress.Response<any>>;

        /**
         * Get the first descendant DOM element of a specific selector that contains a specified text
         * @param selector - a selector used to filter matching descendant DOM elements
         * @param textContent - element content text that needs to match
         * @example
         *    // Find the first li within the nav
         *    cy.get('#yearsList').findFirstThatContains('li', '1997');
         */
         findFirstThatContains(selector: string, textContent: string): Chainable<Cypress.Response<any>>;

          /**
         * Custom command for clearing text in an input, typing the value and then blurring
         * @example cy.get("input").typeText("Kim");
         */
        typeText(text: string): Chainable<Cypress.Response<any>>;
    }
}
