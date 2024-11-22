import { slowCypressDown } from "cypress-slow-down";
// slowCypressDown(300);

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost/fastBeauty_landing/");
    cy.intercept({ resourceType: /fetch/ }, { log: false });
  });

  it("Login", () => {
    cy.get(".nav-item").contains("Productos").click();
    cy.get(".producto").should("have.length.at.least", 1);
    cy.get(".producto").first().find(".carrito-producto").click();
    cy.url().should("include", "?c=ProductsDetails");
  });
});
