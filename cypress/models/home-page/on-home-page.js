import { HOME_PAGE } from "../../page-objects/home-page";

const NAV_BAR_HOME_PAGE = "Home";

export class OnHomePage {
  checkNavBarElements(navBarElement, iterator = 0) {
    HOME_PAGE.getNavBar().should("exist").and("be.visible").and("contain", NAV_BAR_HOME_PAGE);
    Cypress._.times(navBarElement.length, () => {
      HOME_PAGE.getNavBar().find(`[title="${navBarElement[iterator]}"]`).should("be.visible").and("exist");
      iterator++;
    });
  }

  checkComponentBySelector(selector, data, iterator = 0) {
    selector.should("exist").and("be.visible");
    Cypress._.times(data.length, () => {
      selector.should("contain", data[iterator]);
      iterator++;
    });
  }

  checkImageIsLoaded(images, iterator = 0) {
    Cypress._.times(images.length, () => {
      cy.get(`img[alt="${images[iterator]}"]`).should("have.prop", "complete", true);
      iterator++;
    });
  }

  checkTheButtonIsLoaded(buttonSelector) {
    buttonSelector.should("be.visible").and("exist").and("be.enabled");
  }
}

export const ON_HOME_PAGE = new OnHomePage();
