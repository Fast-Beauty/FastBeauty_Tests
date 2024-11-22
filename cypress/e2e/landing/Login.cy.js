import { slowCypressDown } from "cypress-slow-down";
// slowCypressDown(300);

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost/fastBeauty_landing/");
    cy.intercept({ resourceType: /fetch/ }, { log: false });
  });

  it("Login", () => {
    cy.get(".name-user").click();
    cy.get(".notificacion").should("not.have.class", "d-none").click();
    cy.get("#correo").type("ccortes@gmail.com");
    cy.get("#password").type(123456789);
    cy.get('input[value="Iniciar Sesión"]').click();
    cy.url().should("include", "?c=Landing&m=landing");
  });
});
