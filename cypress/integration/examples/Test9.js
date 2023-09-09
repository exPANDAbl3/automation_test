/// <reference types="Cypress" />


describe('Frame', function()
{
    

it('Frame Test', function()
{
    cy.visit("https://dev.sothebysmotorsport.com/how-it-works");
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
    cy.get('.TopHeader_input_wrapper__hwaJH > input').type('Dodge{enter}')
    cy.get('.BidCardItem_bidcard_name__rm9Qw').should('contain','Dodge Viper').click()
})

})