export default class Bizfly {
    visitURL(url) {
        return cy.visit(url);
    }
    getUsername() {
        cy.get('#embed_login').should('be.visible')
        return cy.get('#embed_login').then(($iframe) => {
            let iframeDoc = $iframe.contents().find('body');
            cy.wrap(iframeDoc)
            .find('input[placeholder="Nhập Email hoặc SĐT tài khoản VietID của bạn"]');
        })
    }
    getNext() {
        return cy.get('#embed_login').then(($iframe) => {
            let iframeDoc = $iframe.contents().find('body');
            cy.wrap(iframeDoc)
            .find('button[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-next-icon"]');       
        })
    }
    getPassword() {
        return cy.get('#embed_login').then(($iframe) => {
            let iframeDoc = $iframe.contents().find('body');
            cy.wrap(iframeDoc).find('input[placeholder="Nhập mật khẩu của bạn"]'); 
        })    
    }
    getLogin() {
        return cy.get('#embed_login').then(($iframe) => {
            let iframeDoc = $iframe.contents().find('body');
            cy.wrap(iframeDoc).find('button[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-enter-pass"]')
        })
    }
    getMenu() {
        return cy.get('div[class="bl_content_ns"]');
    }
    getContent() {
        return cy.get('div[class="bl_home"]');
    }
    getSelectProject() {
        return cy.get('div[class="choose_project"]');
    }
    getProjectName(project_name) {
        return cy.xpath(`//span[contains(text(),'${project_name}')]`);
    }
    getBoxContent() {
        return cy.get('div[class="box_content"]').first();
    }
    getSolution(solution) {
        return cy.xpath(`//a[contains(text(),'${solution}')]`);
    }
}
export class BizTicket {
    getHeaderMenu(text) {
        return cy.xpath(`//a[contains(text(),'${text}')]`);
    }
    getSubMenu() {
        return cy.get('.dropdown-menu.show');
    }
    getCreateNewGroup() {
        return this.getSubMenu().find('a').last();
    }
    getGroupTitle() {
        return cy.get('div[class="name d-flex align-items-center"]')
        .find('span')
        .invoke('text').then(function(text) {
            return text;
        });
    }
    getTotalTicket() {
        return cy.get('div[class="count-ticket"]')
    }
    getEachTypeOfTicket() {
        return cy.get('div[class = "lb-status position-relative"]')
    }
    getToastMessage() {
        return cy.get('div[class="noty_message"]')
    }
    getMessageText() {
        return cy.get('span[class="noty_text"]').invoke('text').then(function(text) {
            return text;
        });
    }
    getGroupSetting() {
        return cy.get('div[class="list-tab d-flex flex-wrap"]').find('a').last();
    }
    getVerticalMenuOfGroupSetting(text) {
        return cy.get('div[class="left text-nowrap"]').within(function(){
            return cy.xpath(`//span[contains(text(),'${text}')]`)
        })
        
    }
    getMemberInVerticalMenu() {
        return cy.get('div[class="left text-nowrap"]').find('span').eq(1)
    }
    getMemberEmails() {
        return cy.get('td').find('div[class="email"]')
    }
    getTopOfVerticalMenu() {
        return cy.get('div[class="list list-business"]').find('div[class="text-1"]').eq(0)
    }
    getMostRecentGroup() {
        return cy.get('div[class="list"]').find('div[class="text-2"]').eq(0)
    }
    getViewAllGroups() {
        return cy.get('a[class="btn-view-all-group"]')
    }
    getRecentlyViewedGroups() {
        return cy.get('div[class="row row-eq-height"]:visible').first()
    }
    getOtherGroups() {
        return cy.get('div[class="row row-eq-height"]:visible').last()
    }
    getYourCreatedGroups() {
        return cy.get('a[title="Nhóm do bạn tạo"]')
    }
    getCreateTicket() {
        return cy.xpath(`//button[contains(text(),'Tạo ticket')]`).first();
    }
    getGroupList() {
        return cy.get('button[name="business_id"]')
    }
}
export class GroupTable {
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
export class CreateGroup {
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
export class CreateTicket {
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
export class EditGroup {
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