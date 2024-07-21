export default class EditGroup {
    getGroupName() {
        return cy.get('input[name="name"]')
    }
    getGroupDescription() {
        return cy.get('textarea[name="description"]')
    }
    getDisplayToAllMembers() {
        return cy.get('input[id="a11"]');
    }
    getOnlyDisplayToAsignedMembers() {
        return cy.get('input[id="a12"]');
    }
    getAsignedMembers() {
        return cy.get('select[name="members[]"]')
    }
    getAvatar() {
        return cy.get('input[id="file"]')
    }
    getViewer() {
        return cy.get('div[class="text-select"]')
    }
    getDefaultHandler() {
        return cy.get('div[class="bl-setting_group-index"]').find('div[class="form-group"]').eq(1)
    }
    getDefaultRelatedPerson() {
        return cy.get('div[class="bl-setting_group-index"]').find('div[class="form-group"]').eq(2)
    }
    getDefaultAcceptPerson() {
        return cy.get('div[class="bl-setting_group-index"]').find('div[class="form-group"]').eq(3)
    }
    getAssignCreatorAsHandler() {
        return cy.get('div[class="form-group mt-4"]').eq(0)
    }
    getAssignCreatorAsRelatedPerson() {
        return cy.get('div[class="form-group mt-4"]').eq(1)
    }
    getAssignCreatorAsAcceptPerson() {
        return cy.get('div[class="form-group mt-4"]').eq(2)
    }
    getAssignCreatorAsSupervisor() {
        return cy.get('div[class="form-group mt-4"]').eq(3)
    }
    getFinishTicketRole() {
        return cy.get('div[class="form-group mt-4"]').eq(4)
    }
    getSettingSendNoti() {
        return cy.get('div[class="form-group mt-4"]').eq(5)
    }
    getTicketCreateType() {
        return cy.get('div[class="form-group  mt-4"]').eq(0)
    }
    getSelectTicketViewType() {
        // return cy.get('class="form-group mt-4"').eq(6)
        // return cy.get('select[data-select2-id="select2-data-28-pmxm"]')
        return cy.get('div[class="form-group mt-4"]').eq(6).find('select[name="default_screen"]')
    }
    getSelectedTicketViewType() {
        // return cy.get('class="form-group mt-4"').eq(6)
        return cy.get('div[class="form-group mt-4"]').eq(6).find('span[role="textbox"]')
    }
    getTicketViewPermission() {
        return cy.get('div[class="form-group  mt-4"]').eq(1)
    }
    getSubmit() {
        return cy.get('button[class="btn btn-bizfly mr-3"]')
    }
}