it("flow", () => {
  cy.visit("http://localhost:3000")
    .writeAndSubmit(/ingresa un elemento/i, "Elemento 54")
    .writeAndSubmit(/ingresa un elemento/i, "Elemento 55")
    .writeAndSubmit(/ingresa un elemento/i, "Elemento 56")
    .writeAndSubmit(/ingresa un elemento/i, "Elemento 57")
    .should("exist")
    .queryByText("Nuevo elemento 53", { timeout: 200 })
    .should("not.exist");
});
