import { onNavigationPage } from '../../support/page-objects/navigationPage';
import { onContactUsPage } from '../../support/page-objects/contactUsPage';

const testName = 'DemoTest';
const testPhoneNumber = '4551234567';
const testEmail = 'demoTest@gmail.com';

describe('Verify Positive Test Cases for Countact Us Page', () => {
  it('Demo Test One: Verify if user is able to enter Name', () => {
    cy.openApp();
    onNavigationPage.clickContactUsButton();
    onContactUsPage.enterName(testName);
  });

  it('Demo Test Two: Verify if user is able to enter Phone Number', () => {
    cy.openApp();
    onNavigationPage.clickContactUsButton();
    onContactUsPage.enterPhone(testPhoneNumber);
  });

  it('Demo Test Three: Verify if user is able to enter Email', () => {
    cy.openApp();
    onNavigationPage.clickContactUsButton();
    onContactUsPage.enterEmail(testEmail);
  });
});
