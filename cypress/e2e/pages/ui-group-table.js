export default class GroupTable {
    getGroupNames() {
        return cy.get('div[class="text-1"]')
    }
    getGroupDescriptions() {
        return cy.get('div[class="text-3"]')
    }
    getSearchInput() {
        return cy.get('input[placeholder="Tìm kiếm nhóm công việc"]')
    }
    getSearchIcon() {
        return cy.get('button[class="btn my-2 my-sm-0"]').eq(2)
    }
    getSearchOutput() {
        return cy.get('div[class="row row-eq-height"]')
    }
}