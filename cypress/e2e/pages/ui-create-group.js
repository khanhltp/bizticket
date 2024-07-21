export default class CreateGroup {
    getCreateGroupModal() {
        return cy.get('div[id="modalCreateGroup"]')
    }
    getGroupName() {
        return cy.get('input[placeholder="Nhập tên nhóm công việc/dự án/team"]');
    }
    getSelectedWorkflow(text) {
        return cy.xpath(`//span[contains(text(),'${text}')]`)
    }
    getWorkflowOption() {
        return cy.get('select[name="workflow_id"]')
    }
    getGroupDescription() {
        return cy.get('textarea[placeholder="Mô tả về nhóm công việc"]');
    }
    getDisplayToAllMembers() {
        return cy.get('#show1');
    }
    getOnlyDisplayToAsignedMembers() {
        return cy.get('#radio2');
    }
    getNameOrEmailRadio() {
        return cy.get('#radio21');
    }
    getNameOrEmailTag() {
        return cy.get('select[name="member[]"]')
    }
    getGroupNameRadio() {
        return cy.get('#radio22');
    }
    getGroupNameTag() {
        return cy.get('select[name="group[]"');
    }
    getSelectedValue() {
        return cy.get('div[class="text-select"]')
    }
    getSubmit() {
        return cy.get('button[class="btn btn-bizfly btn-create-business has-spinner"]');
    }
    getCancel() {
        return cy.get('button[class="btn btn-bizfly btn-close mr-3"]');
    }
}