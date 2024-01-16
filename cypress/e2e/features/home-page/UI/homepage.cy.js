import { MESSAGES } from "../../../../constants/test-data";
import { ENDPOINTS } from "../../../../constants/url-data";
import { HOME_PAGE } from "../../../../page-objects/home-page";
import { ENV_VARIABLES } from "../../../smoke-tests/home-page/UI/components-check.cy";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit(ENV_VARIABLES.baseUrl + ENDPOINTS.testTaskAutomation);
    cy.checkStatusCode(ENDPOINTS.testTaskAutomation, 200);
  });

  it("Welcome post", () => {
    HOME_PAGE.getWelcomePostInput().clear().type(MESSAGES.testMessage);
    HOME_PAGE.getWelcomePostButton().click();
    HOME_PAGE.getWelcomePostInput().should("contain", MESSAGES.postErrorMessage);
  });

  it("Complete registration", () => {
    HOME_PAGE.getCompleteRegistrationButton().click();
    HOME_PAGE.getWelcomePostInput().should("contain", MESSAGES.registrationSuccess);
  });

  it("My photos", () => {
    HOME_PAGE.getMyPhotosButton().click();
    HOME_PAGE.getAllMyPhotos().invoke("prop", "complete").should("eq", true);
  });

  it("Hey! submit", () => {
    HOME_PAGE.getHeyActionSelect()
      .invoke("prop", "childElementCount")
      .then((value) => {
        let i = 0;
        Cypress._.times(value, () => {
          HOME_PAGE.getHeyActionSelect().select(i);
          HOME_PAGE.getHeySubmitButton().click();
          i++;
        });
      });
    HOME_PAGE.getLeftColumn().find(".fa-remove").click();
    HOME_PAGE.getHeyActionSelect().should("not.be.visible");
    HOME_PAGE.getHeySubmitButton().should("not.be.visible");
  });
});
