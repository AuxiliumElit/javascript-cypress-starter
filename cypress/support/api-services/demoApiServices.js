export class DemoApiServices {
  constructor() {
    this.baseUrl = 'https://fakestoreapi.com';
    this.payloadObject = {
      title: 'shoes',
      price: 14.5,
      description: 'Lorem Ipsum',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    };
  }

  demoGetRequest() {
    cy.log(`Sending Demo GET Request`);
    return cy.request({
      url: `${this.baseUrl}/products`,
      // headers: { Authorization: `Bearer ${token}` },
      method: 'GET',
    });
  }

  demoPostRequest() {
    cy.log(`Sending Demo POST Request`);
    return cy.request({
      url: `${this.baseUrl}/products`,
      // headers: { Authorization: `Bearer ${token}` },
      method: 'POST',
      body: this.payloadObject,
    });
  }

  demoPutRequest(productId) {
    cy.log(`Sending Demo PUT Request`);
    const payloadData = { ...this.payloadObject };
    payloadData.price = 12;
    return cy.request({
      url: `${this.baseUrl}/products/${productId}`,
      // headers: { Authorization: `Bearer ${token}` },
      method: 'PUT',
      body: payloadData,
    });
  }
}

export const demoApiServices = new DemoApiServices();
