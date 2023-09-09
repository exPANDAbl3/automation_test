/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('Frame', function()
{

it('Frame Test', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe")//get iframe selector
    
    cy.iframe().find("a[href*=mentorship]").eq(0).click()//loade iframe
    cy.iframe().find("h1[class*=pricing-title]").should('have.length','2')
    
})

})