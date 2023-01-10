describe("Walkthrough", () => {
  it("Has all the features working", () => {
    cy.visit("http://127.0.0.1:5173/") // change URL to match your dev URL
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/?page=2"] > .bg-emerald-700 > p').click()
    cy.get('[href="/?page=1"] > .bg-emerald-700 > p').click()
    cy.get(".w-full").type("5")
    cy.get("svg").click()
    /* ==== End Cypress Studio ==== */
  })
})
