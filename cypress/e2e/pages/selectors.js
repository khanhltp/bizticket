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
        // .invoke('text').then(function(text) {
        //     return text;
        // });
    }
    getEachTypeOfTicket() {
        return cy.get('div[class = "lb-status position-relative"]')
    }
    getSuccessNoti() {
        return cy.get('div[class="noty_message"]')
    }
    getSuccessNotiText() {
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
    getGroupName() {
        return cy.get('input[name="name"]')
    }
    getGroupDescription() {
        return cy.get('textarea[name="description"]')
    }
    getDisplayToAllMembers() {
        return cy.get('#a11');
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
    // getGroupName(text) {
    //     return cy.xpath(`//div[contains(text(),'${text}')]`)
    // }
    getRecentlyViewedGroups() {
        return cy.get('div[class="row row-eq-height"]:visible').first()
    }
    // getAllNameTagsOfRecentlyViewedGroups() {
    //     return cy.get('div[class="row row-eq-height"]:visible').first().within(function(){
    //         return cy.get('div[class="text-1"]')
    //     })
    // }
    getOtherGroups() {
        return cy.get('div[class="row row-eq-height"]:visible').last()
    }
    getYourCreatedGroups() {
        return cy.get('a[title="Nhóm do bạn tạo"]')
    }
    // getAllNameTagsOfYourCreatedGroups() {
    //     // return cy.get('div[class="col-lg-4 mb-4"]')
    //    return cy.get('div[class="text-1"]')
    // }
   
    getCreateTicket() {
        return cy.xpath(`//button[contains(text(),'Tạo ticket')]`).first();
    }
    getGroupList() {
        return cy.get('button[name="business_id"]')
    }
}
export class GroupTable {
    // getGroupName(group_name) {
    //     return cy.xpath(`//div[.='${group_name}']`)
    //     // return cy.xpath(`//div[contains(.,'${group_name}')) and not(contains(.,'${group_name}')]`)
    //     // return cy.xpath(`//div[normalize-space(text())='${group_name}']`)
        
    // }
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
    getNameOrEmailInput() {
        return cy.get('textarea[class="select2-search__field"]').eq(3);
    }
    getGroupNameRadio() {
        return cy.get('##radio22');
    }
    getGroupNameInput() {
        return cy.get('textarea[placeholder="Nhập tên nhóm thành viên"]');
    }
    getSubmit() {
        return cy.get('button[class="btn btn-bizfly btn-create-business has-spinner"]');
    }
    getCancel() {
        return cy.get('button[class="btn btn-bizfly btn-create-business has-spinner"]');
    }
}
export class CreateTicket {
    getGroupList() {
        return cy.get('input[name="business_id"]')
    }
    getSearchInput() {
        return cy.get('input[placeholder="Tìm kiếm"]').first()
    }
    getSearchOutput(group_name) {
        return cy.get(`div[title='${group_name}']`)
    }
}