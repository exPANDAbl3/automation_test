/// <reference types="Cypress" />
import 'cypress-iframe'

describe('Frame', function()
{
    before(function(){ 

        cy.fixture('example')
    })




it('Frame Test', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
   
    cy.getMaxListeners('input[name="name"]:nth-child(2)').type("Bob")
    cy.get('select').select("Female")
    
})
})