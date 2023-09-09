/// <reference types="Cypress" />

describe("Handling Child Window", function () {
  it("Should Handle Child Window", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.origin("https://www.qaclickacademy.com", () => {
      //after this spy will work on diff tab

      cy.get(".navbar-nav > :nth-child(4) > a").click();
      cy.get(".col-lg-5 > .section-title > h2").should(
        "contain",
        "Welcome to QAClick Academy"
      ); //to get text use contain
    });
  });
});
