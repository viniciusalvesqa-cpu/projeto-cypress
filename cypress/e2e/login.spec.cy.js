describe('Orange HRM Tests', () => {

  const selectorlist = {
    usernameFild: "[name= 'username']",
    passwordFild: "[name='password']",
    loginButton:".oxd-button",
    sectionTitleTopbar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongcredentialAlert: ".oxd-alert"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameFild).type ('Admin')
    cy.get(selectorlist.passwordFild).type ('admin123')
    cy.get(selectorlist.loginButton).click ()
    cy.get(selectorlist.sectionTitleTopbar).contains('Dashboard')
  })
 it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameFild).type ('test')
    cy.get(selectorlist.passwordFild ).type ('test')
    cy.get(selectorlist.loginButton).click ()
    cy.get(selectorlist.wrongcredentialAlert)
  })
})