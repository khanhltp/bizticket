export default class BizTicket {
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