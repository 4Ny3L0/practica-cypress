describe("Search test case", function () {
  before(function () {
    cy.log("Ejecutar precondiciones a las pruebas");
  });

  after(function () {
    cy.log("Ya todas las pruebas deben estar ejecutadas");
  });

  beforeEach(function () {
    cy.visit("http://automationpractice.com/index.php");
  });
  afterEach(function () {
    cy.log("Resetenado datos");
  });
  it("Search dresses", function () {
    cy.get("#search_query_top").type("dress");
    cy.get("#searchbox > .btn").click();
    cy.get(".lighter").contains('"dress"');
  });
  it("Search hats", function () {
    cy.get("#search_query_top").type("hat");
    cy.get("#searchbox > .btn").click();
    cy.get(".lighter").contains('"hat"');
  });
});
