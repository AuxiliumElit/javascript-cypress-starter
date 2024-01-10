import { onNavigationPage } from '../../support/page-objects/navigationPage';
import { onContactUsPage } from '../../support/page-objects/contactUsPage';

describe('Verify Negative Test Cases for Countact Us Page', () => {
  it('Demo Test Four: Verify if Name id require once user click Submit button', () => {
    cy.openApp();
    onNavigationPage.clickContactUsButton();
    onContactUsPage.clickSubmitButton();
    onContactUsPage.verifyNameTextFieldAlert();
  });

  it('Demo Test Five: Verify if Phone Number is require once user click Submit button', () => {
    cy.openApp();
    onNavigationPage.clickContactUsButton();
    onContactUsPage.clickSubmitButton();
    onContactUsPage.verifyPhoneTextFieldAlert();
  });

  it('Demo Test Six: Verify if Email is require once user click Submit button', () => {
    cy.openApp();
    onNavigationPage.clickContactUsButton();
    onContactUsPage.clickSubmitButton();
    onContactUsPage.verifyEmailTextFieldAlert();
  });
});
