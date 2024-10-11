import { slowCypressDown } from "cypress-slow-down";
// slowCypressDown(300);


describe('Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost/fastBeauty_admin/');
  })

  it('Mostrar alerta si envía formularo vacío', () => {
    cy.get('input[value="Iniciar Sesión"]').should('be.visible').click();
    cy.get('.alert.alert-danger')
    .should('exist')
    .should('have.text', 'Debe rellenar todos los campos');;
  });
  
  it('Alerta de email inválido', () => {
    cy.get('#correo').type('email');
    cy.get('#password').type(1234);
    cy.get('input[value="Iniciar Sesión"]').click();
    cy.get('.alert.alert-danger')
    .should('exist')
    .should('have.text', 'El email proporcionado es inválido');
    // cy.get('.logo').first().click();
  })
})