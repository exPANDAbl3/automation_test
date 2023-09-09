/// <reference types="Cypress" />

describe("Find Elements with Specific Color", () => {
  it("Should find elements with color #3498db", () => {
    // Visit the website or page you want to test
    cy.visit("https://dev.sothebysmotorsport.com/"); // Replace with the actual website URL

    // Define the expected color in RGB format
    const expectedColor = "rgb(0, 180, 229)"; // RGB for #3498db

    // Use Cypress to find all elements on the page
    cy.get("button").each(($button) => {
      // Get the computed color of each element
      cy.wrap($button)
        .should("have.css", "background-color")
        .then((color) => {
          // Check if the computed color matches the expected color
          if (color === expectedColor) {
            // Log or perform actions on the elements with the expected color
            cy.log(
              `Found element with color #3498db: ${$element.prop("tagName")}`
            );
          }
        });
    });
  });
});
