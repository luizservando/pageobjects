const StartForm = require('../startForm/startForm.po')

class Pipe {
    constructor() {
        this.txtCardTitle = 'data-selector-card-title'
        this.btnStartForm = '#open-start-form'
        this.btnCreateNewPhase = '[href="#create-phase"]'
        this.txbNewPhaseName = '[placeholder="Enter the name"]'
        this.btnSaveNewPhase = '[title=Create]'
    }

    cardTitle(title) {
        cy.get(`[${this.txtCardTitle}="${title}"]`).click()
    }

    startForm() {
        cy.get(this.btnStartForm).click()
        return new StartForm()
    }

    createNewPhase() {
        cy.get(this.btnCreateNewPhase).scrollIntoView().click()
        return this
    }

    newPhaseName(name) {
        cy.get(this.txbNewPhaseName).type(name)
        return this
    }

    saveNewPhase() {
        cy.get(this.btnSaveNewPhase).click()
        return this
    }

}

module.exports = Pipe
