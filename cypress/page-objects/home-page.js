export class HomePage {
  getNavBar() {
    return cy.get(".w3-bar");
  }

  getLeftColumn() {
    return cy.get(".w3-col.m3");
  }

  getMiddleColumn() {
    return cy.get(".w3-col.m7");
  }

  getRightColumn() {
    return cy.get(".w3-col.m2");
  }

  getFriendRequestAcceptButton() {
    return cy.get('button[title="Accept"]');
  }

  getFriendRequestDeclineButton() {
    return cy.get('button[title="Decline"]');
  }

  getFooter() {
    return cy.get("footer.w3-container");
  }

  getMyLinksButton() {
    return cy.get(`button[onclick="myFunction('Demo1')"]`);
  }

  getMyPhotosButton() {
    return cy.get(`button[onclick="myFunction('Demo3')"]`);
  }

  getAllMyPhotos() {
    return cy.get("#Demo3 > div > div > img");
  }

  getLinks() {
    return cy.get("div#Demo1 > p > a");
  }

  getNotificationsButton() {
    return cy.get('button[title="Notifications"]');
  }

  getCompleteRegistrationButton() {
    return cy.get("show-hello").shadow().find("#completeRegistrationButton");
  }

  getWelcomePostButton() {
    return cy.get("div.popup");
  }

  getWelcomePostInput() {
    return cy.get("#post_input");
  }

  getHeyActionSelect() {
    return cy.get("#cars");
  }

  getHeySubmitButton() {
    return cy.get('input[type="submit"]');
  }

  getGloryToUkraineGif() {
    return cy.get(".w3-padding-16.w3-round > img");
  }
}

export const HOME_PAGE = new HomePage();
