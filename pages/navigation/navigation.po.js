class Navigation {
    constructor() {
        this.btnPipes = '[data-title=Pipes]'
        this.btnDatabases = '[data-title=Databases]'
        this.btnReports = '[data-title=Reports]'
        this.btnAutomations = '[data-title=Automations]'
        this.btnPortals = '[data-title=Portals]'
        this.btnHelp = '[data-title="Help for this feature"]'
        this.btnChat = '[data-title=Chat]'
    }

    pipes() {
        cy.get(this.btnPipes).click()
    }

    databases() {
        cy.get(this.btnDatabases).click()
    }

    reports() {
        cy.get(this.btnReports).click()
    }

    automations() {
        cy.get(this.btnAutomations).click()
    }

    portals() {
        cy.get(this.btnPortals).click()
    }

    help() {
        cy.get(this.btnHelp).click()
    }

    chat() {
        cy.get(this.btnChat).click()
    }

}

module.exports = Navigation
