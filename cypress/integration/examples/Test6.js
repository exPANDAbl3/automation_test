/// <reference types="Cypress" />

describe('Array', function()
{

it('Scan Table', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => //get specific column by writing css parent to child
    {
        const text=$el.text()//to find row scan by array
        if(text.includes("Python"))
        {
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)//if got then move to sibling with next but also resolve promise then as next is jquery
            {
                const PriceText= price.text()
                expect(PriceText).to.equal('25')

            })

        }

    }     )
 
})

})