export const ENV_VARIABLES = Cypress.env();

Cypress.Commands.add("checkStatusCode", (endpoint, expectedStatusCode) => {
  cy.request(ENV_VARIABLES.baseUrl + endpoint)
    .its("status")
    .should("eq", expectedStatusCode);
});
