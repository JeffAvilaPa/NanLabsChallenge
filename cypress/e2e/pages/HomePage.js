class HomePage {
    visit() {
      cy.visit('https://automationexercise.com')
    }
  
    verifyHomePageVisible() {
      cy.get('body').should('contain.text', 'Home') // puede afinarse
    }
  
    clickSignupLogin() {
      cy.get('a[href="/login"]').click()
    }

    logout() {
      cy.get('a').contains('Logout').click()
    }
  }
  
  export const homePage = new HomePage()
  