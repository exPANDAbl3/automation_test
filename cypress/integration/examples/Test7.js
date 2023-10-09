/// <reference types="Cypress" />

describe('Mosue Hover', function()
{

it('Hover', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('div.mouse-hover-content').invoke('show').//if you want mouse hover then call jquery
    cy.contains('Top').click()//otherwise use mouse:force
    cy.url().should('include','top')
})

})