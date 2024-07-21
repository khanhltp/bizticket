export default class CreateTicket {
    getCreateTicketModal() {
        return cy.get('div[id="modalCreateGroup"]')
    }
    getGroupOption() {
        return cy.get('input[name="business_id"]')
    }
    getGroupList() {
        return cy.get('div[class="dropdown-menu show"]')
    }
    getSearchInput() {
        return cy.get('input[placeholder="Tìm kiếm"]').eq(1)
    }
    getGroupValue() {
        return cy.get('div[data-toggle="tooltip"]').last()
    }
}