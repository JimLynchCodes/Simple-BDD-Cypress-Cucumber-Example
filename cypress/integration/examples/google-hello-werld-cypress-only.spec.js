/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {

    // Given: I am on Google home page.
    cy.visit('https://google.com')
  })

  it('should recommend "hello world" when I misspell my search as, "hello welrd".', () => {

    // When type "hello welrd" into the search on google.com and hit enter. 
    cy.get('input[title="Search"]')
    .type('hello werld', { delay: 100 })
    .type('{enter}', {delay: 100})
 
    //  Then the next page should say, "Showing results for hello world" 
    cy.get("span:contains(Showing results for)")
    .next()
    .should('have.text', 'hello world')

  })
 
})
