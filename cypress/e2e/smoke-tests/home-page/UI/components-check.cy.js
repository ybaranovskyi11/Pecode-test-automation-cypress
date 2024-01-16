import {
  FOOTER,
  FRIEND_REQUEST,
  HEY_COMPONENT,
  IMAGES,
  INTERESTS,
  MY_COMPONENT,
  MY_PROFILE,
  NAV_BAR_ELEMENTS,
  PECODE_COMPONENTS,
  UPCOMING_EVENTS,
  WELCOME
} from "../../../../constants/component-data";
import { ENDPOINTS } from "../../../../constants/url-data";
import { ON_HOME_PAGE } from "../../../../models/home-page/on-home-page";
import { HOME_PAGE } from "../../../../page-objects/home-page";

export const ENV_VARIABLES = Cypress.env();

describe("Checking components", () => {
  beforeEach(() => {
    cy.visit(ENV_VARIABLES.baseUrl + ENDPOINTS.testTaskAutomation);
    cy.checkStatusCode(ENDPOINTS.testTaskAutomation, 200);
  });

  it("Navbar component", () => {
    ON_HOME_PAGE.checkNavBarElements(NAV_BAR_ELEMENTS);
  });

  it("My profile components", () => {
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getLeftColumn(), MY_PROFILE);
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getLeftColumn(), MY_COMPONENT);
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getLeftColumn(), INTERESTS);
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getLeftColumn(), HEY_COMPONENT);
  });

  it("Main components", () => {
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getMiddleColumn(), WELCOME);
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getMiddleColumn(), PECODE_COMPONENTS.first);
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getMiddleColumn(), PECODE_COMPONENTS.second);
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getMiddleColumn(), PECODE_COMPONENTS.third);
    ON_HOME_PAGE.checkImageIsLoaded(IMAGES.main);
  });

  it("Upcoming Events component", () => {
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getRightColumn(), UPCOMING_EVENTS);
  });

  it("Friend Request component", () => {
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getRightColumn(), FRIEND_REQUEST);
  });

  it("Glory to Ukraine gif", () => {
    HOME_PAGE.getGloryToUkraineGif().should("be.visible").invoke("prop", "complete").should("eq", true);
  });

  it("Footer component", () => {
    ON_HOME_PAGE.checkComponentBySelector(HOME_PAGE.getFooter(), FOOTER);
  });
});
