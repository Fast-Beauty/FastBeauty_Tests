import { slowCypressDown } from "cypress-slow-down";
// slowCypressDown(300);

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost/fastBeauty_landing/");
    cy.intercept({ resourceType: /fetch/ }, { log: false });
  });

  it("Login", () => {
    cy.get(".nav-item").contains("Servicios").click();
    cy.get(".servicio_container").should('have.length.at.least', 1);
  });
});
