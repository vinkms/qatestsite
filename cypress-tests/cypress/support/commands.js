Cypress.Commands.add('getByDataTestId', (dataTestId, options = undefined) => {
    return cy.get(`[data-testid="${dataTestId}"]`, options);
});

Cypress.Commands.add('findFirst', {prevSubject: true}, (subject, selector) => {
    return cy.wrap(subject)
            .find(selector)
            .first();
});

Cypress.Commands.add('findFirstThatContains', {prevSubject: true}, (subject, selector, textContent) => {
    return cy.wrap(subject)
            .find(selector)
            .contains(new RegExp('^' + textContent + '$'));
});

Cypress.Commands.add("typeText", { prevSubject: true }, (subject, text) => {
    cy.wrap(subject)
        .clear()
        .type(text)
        .blur();
});