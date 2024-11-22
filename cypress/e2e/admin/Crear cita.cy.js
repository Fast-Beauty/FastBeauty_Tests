import { slowCypressDown } from "cypress-slow-down";
// slowCypressDown(300);

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost/fastBeauty_admin/");
    cy.intercept({ resourceType: /fetch/ }, { log: false });
  });

  it("Loguearse y redir", () => {
    cy.get("#correo").type("ccortes@gmail.com");
    cy.get("#password").type(123456789);
    cy.get('input[value="Iniciar Sesión"]').click();
    cy.url().should("include", "?c=Dashboard&m=dashboard");
    cy.get('.pcoded-hasmenu').contains('Citas').click();
    cy.get('.pcoded-hasmenu').contains('Citas').find('pcoded-submenu').click();

  });
});
