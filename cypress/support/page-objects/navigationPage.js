export class NavigationPage {
  constructor() {
    this.someId = '#someId';
    this.headerContainer = '[class="main-menu sticky-header"]';
    this.contactUsButton = '[class="theme-btn-6"]:contains("Contact Us")';
  }

  clickContactUsButton() {
    cy.get(this.headerContainer, { timeout: 10000 })
      .find(this.contactUsButton)
      .should('be.visible')
      .click();
  }
}

export const onNavigationPage = new NavigationPage();
