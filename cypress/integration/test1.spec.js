describe("Accediendo a un sitio", function () {
  let datoBusqueda = "Chihuahua";
  it("Abriendo el navegador", function () {
    cy.visit("https://petstore.octoperf.com/");
  });
  it("seleccionando un enlace", function () {
    cy.contains("Enter").click();
  });
  it("Realizando una búsqueda", function () {
    cy.get("input:first").type(datoBusqueda);
    cy.get('[name="searchProducts"]').click();
    cy.get('[name="keyword"]').clear();
    // cy.contains("Chihuahua");
    // cy.get("#BackLink").click();
  });
});
