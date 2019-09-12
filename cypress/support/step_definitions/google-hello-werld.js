
import { Given } from "cypress-cucumber-preprocessor/steps";


Given('I open the Google home page', () => {

  cy.visit('https://google.com')

})

When('I type "hello werld" into the serach and hit enter', () => {
  
  cy.get('input[title="Search"]')
    .type('hello werld', { delay: 100 })
    .type('{enter}', { delay: 100 })

})

Then('I should see that the results are for "hello world".', () => {
  
  cy.get("span:contains(Showing results for)")
    .next()
    .should('have.text', 'hello world')
    
})
