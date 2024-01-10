export class ContactUsPage {
  constructor() {
    this.someId = '#someId';
    this.nameTextField = '[name="name"]';
    this.phoneTextField = '[name="phone"]';
    this.emailTextField = '[name="email"]';
    this.submitButton = '[type="submit"]:contains("Submit Now")';
    this.textFieldAlert = 'Please fill out this field.';
    this.textFieldAlertTwo = 'Lorem Ipsum';
  }

  verifyEmailTextFieldAlert() {
    cy.get(this.emailTextField)
      .invoke('prop', 'validationMessage')
      .should('equal', this.textFieldAlertTwo);
  }

  verifyPhoneTextFieldAlert() {
    cy.get(this.phoneTextField)
      .invoke('prop', 'validationMessage')
      .should('equal', this.textFieldAlert);
  }

  verifyNameTextFieldAlert() {
    cy.get(this.nameTextField)
      .invoke('prop', 'validationMessage')
      .should('equal', this.textFieldAlert);
  }

  clickSubmitButton() {
    cy.get(this.submitButton, { timeout: 10000 }).should('exist').click();
  }

  enterName(name) {
    cy.get(this.nameTextField).should('be.visible').type(name);
  }

  enterPhone(phone) {
    cy.get(this.phoneTextField).should('be.visible').type(phone);
  }

  enterEmail(email) {
    cy.get(this.emailTextField).should('be.visible').type(email);
  }
}

export const onContactUsPage = new ContactUsPage();
