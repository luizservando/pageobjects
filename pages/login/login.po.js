const OrganizationDashboard = require('../organization/organizationDashboard.po')

class Login {
	constructor() {
		this.local = {
			txbUser: '#user_login',
			txbPassword: '#user_password',
			btnLogIn: '[action="/password"]'
		}
		this.staging = {
			txbUser: '[name=username]',
			txbPassword: '[name=password]',
			btnLogIn: '[name=submit]'
		}
	}

	visitLogin() {
		cy.visit('/login')
		return this
    }
    
    loginStaging(user, password) {
        cy.get(this.staging.txbUser).type(user)
        cy.get(this.staging.txbPassword).type(password)
		cy.get(this.staging.btnLogIn).click()
		return new OrganizationDashboard()
	}
	
	loginLocal(user, password) {
        cy.get(this.local.txbUser).type(user)
        cy.get(this.local.txbPassword).type(password)
		cy.get(this.local.btnLogIn).click()
		return new OrganizationDashboard()
    }
}

module.exports = Login
