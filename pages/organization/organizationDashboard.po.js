class OrganizationDashboard {
    constructor() {
        this.txtPipeTitle = '.pp-pipe-title'
    }

    pipeTitle(title) {
        cy.get(this.txtPipeTitle).contains(title).click()
    }

}



module.exports = OrganizationDashboard
