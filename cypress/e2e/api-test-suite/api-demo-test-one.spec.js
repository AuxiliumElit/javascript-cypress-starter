import { demoApiServices } from '../../support/api-services/demoApiServices';

const expectedRate = 3.9;
const productId = 21;
const updatedPrice = 12;

describe('Demo API Test Cases', () => {
  it('Demo Test One: Verify Get Request', () => {
    demoApiServices
      .demoGetRequest()
      .its('body')
      .then((body) => {
        if (body.length > 0) {
          const currentRate = body[0].rating.rate;
          expect(currentRate).to.eql(expectedRate);
        } else {
          cy.log(`Request Body Response is empty`);
        }
      });
  });

  it('Demo Test Two: Verify POST Request', () => {
    demoApiServices
      .demoPostRequest()
      .its('body')
      .then((body) => {
        const id = body.id;
        expect(id).to.eql(productId);
      });
  });

  it('Demo Test Three: Verify PUT Request', () => {
    demoApiServices
      .demoPutRequest(productId)
      .its('body')
      .then((body) => {
        const id = body.id;
        const price = body.price;
        expect(id).to.eql(productId);
        expect(price).to.eql(updatedPrice);
      });
  });
});
