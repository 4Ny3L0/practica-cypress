describe("Escribir en busqueda", function () {
  it("Escribir", function () {
    cy.visit("http://automationpractice.com/index.php");
    // cy.get('[placeholder="Search"]').clear();
    // cy.get('[placeholder="Search"]').type("hola");
    // cy.get('[placeholder="Search"]').clear();
    // cy.get('[placeholder="Search"]').type("que tal");
    cy.get('[placeholder="Search"]')
      .clear()
      .type("hola")
      .clear()
      .type("que tal");
  });
});
