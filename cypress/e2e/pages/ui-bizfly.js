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