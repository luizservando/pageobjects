class StartForm {
    constructor() {
        this.btnCreateNewCard = '#start-form-create-card'
    }

    createNewCard() {
        cy.get(this.btnCreateNewCard).click()
    }

}

module.exports = StartForm
