describe("Formas de encontrar elementos", function () {
  it("Buscar", function () {
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".search_query.form-control.ac_input").type("Hola"); //busqueda por clases
    cy.get("#search_query_top").type(" mundo"); //busqueda por ID
    cy.get('[name="search_query"]').type(" estoy usando un name"); //busqueda por attributo name
    cy.get('[placeholder="Search"]').clear();
    cy.get('[placeholder="Search"]').type(
      "ahora borre todo y use el atributo placeholder"
    );
  });
});
