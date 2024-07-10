import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Bizfly, { BizTicket, CreateGroup, CreateTicket, GroupTable } from "../../pages/selectors";
import data from "../../../fixtures/input-data.json";
import account from "../../../fixtures/account.json";
import { faker } from "@faker-js/faker";

let bizfly = new Bizfly();
let bizticket = new BizTicket();
let create_group = new CreateGroup();
let group_table = new GroupTable();
let create_ticket = new CreateTicket();

Given('Đăng nhập hệ thống và truy cập màn hình Biz Ticket', function () {
    // cy.loginAndAccessBizTicket()
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
});