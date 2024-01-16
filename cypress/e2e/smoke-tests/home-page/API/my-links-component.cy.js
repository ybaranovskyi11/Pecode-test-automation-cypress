import { ENDPOINTS } from "../../../../constants/url-data";
import { HOME_PAGE } from "../../../../page-objects/home-page";
import { ENV_VARIABLES } from "../UI/components-check.cy";

describe("Api tests", () => {
  beforeEach(() => {
    cy.visit(ENV_VARIABLES.baseUrl + ENDPOINTS.testTaskAutomation);
    cy.checkStatusCode(ENDPOINTS.testTaskAutomation, 201);
  });

  it("Test links for successful responses", () => {
    HOME_PAGE.getMyLinksButton().click();
    HOME_PAGE.getLinks().each((link) => {
      const href = link.attr("href");
      cy.request(href).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
