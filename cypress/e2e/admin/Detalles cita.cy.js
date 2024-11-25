import { slowCypressDown } from "cypress-slow-down";
// slowCypressDown(300);

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost/fastBeauty_admin/");
    cy.intercept({ resourceType: /fetch/ }, { log: false });
  });

  it("Loguearse y redir", () => {
    cy.get("#correo").type("correo@correo.com");
    cy.get("#password").type(123456789);
    cy.get('input[value="Iniciar Sesión"]').click();
    cy.url().should("include", "?c=Dashboard&m=dashboard");
    cy.get(".pcoded-hasmenu").contains("Citas").click();
    cy.get(".pcoded-hasmenu").first().find(".pcoded-submenu").click();
    cy.url().should("include", "?c=Appointments&m=index");
    cy.get("table tbody tr").first().find("a").first().click();
  });
});
