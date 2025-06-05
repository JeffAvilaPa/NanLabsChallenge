// cypress/support/e2e.js
import '@cypress/code-coverage/support'

// Importa comandos personalizados si los tienes
// import './commands'

// Hook global para que antes de cada test visite la página base
beforeEach(() => {
    cy.visit('/')
  })
  
  // Opcional: hook para hacer algo después de cada test, como limpiar cookies o logs
  afterEach(() => {
    // cy.clearCookies()
  })
  