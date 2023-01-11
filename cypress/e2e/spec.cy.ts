describe("Walkthrough", () => {
  it("Has all the features working", () => {
    cy.visit("http://127.0.0.1:5173/") // change URL to match your dev URL
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .w-full > p').click();
    cy.get('[style="background-color: rgb(69, 181, 170);"] > :nth-child(2)').click();
    cy.get('.bg-red-500 > svg').click();
    cy.get(':nth-child(1) > .w-full > p').click();
    cy.get('.rounded-tl').type('3');
    cy.get('svg').click();
    cy.get('.cursor-pointer > :nth-child(2)').click();
    cy.get('.bg-red-500 > svg > path').click();
    /* ==== End Cypress Studio ==== */
  })
})
