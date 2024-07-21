import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Bizfly from "../../pages/ui-bizfly";
import BizTicket from "../../pages/ui-bizticket";
import data from "../../../fixtures/input-data.json";
import account from "../../../fixtures/account.json";

let bizfly = new Bizfly();
let bizticket = new BizTicket();

Given('Đăng nhập hệ thống và truy cập màn hình Tạo mới nhóm công việc', function () {
    bizfly.visitURL(data.base_url + data.path.login)
    cy.inputText(bizfly.getUsername(), account.username);
    bizfly.getNext().click();
    cy.inputText(bizfly.getPassword(), account.password);
    bizfly.getLogin().click();
    cy.wait(8000);

    cy.visit('https://ticket.bizdev.vn/?project_token=08fabe86-a288-4ab3-a32c-e1337e5dcec3')

    // bizfly.visitURL(data.base_url);
    // bizfly.getMenu().should('to.be.visible');
    // bizfly.getContent().should('to.be.visible');
    // bizfly.getSelectProject().click();
    // bizfly.getProjectName(data.project.name).click();
    // bizfly.getSolution(data.project.solution).first().click();
    bizticket.getHeaderMenu('Nhóm công việc').click();
    bizticket.getCreateNewGroup().click();
});

// Given ('Đăng nhập hệ thống và truy cập cài đặt nhóm công việc gần nhất', function() {
//     bizfly.visitURL(data.base_url + data.path.login)
//     cy.inputText(bizfly.getUsername(), account.username);
//     bizfly.getNext().click();
//     cy.inputText(bizfly.getPassword(), account.password);
//     bizfly.getLogin().click();
//     cy.wait(8000);

//     cy.visit('https://ticket.bizdev.vn/?project_token=08fabe86-a288-4ab3-a32c-e1337e5dcec3')
//     bizticket.getHeaderMenu('Nhóm công việc').click();
//     bizticket.getMostRecentGroup().click();
//     bizticket.getGroupSetting().click();
// })