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

When('Tạo mới nhóm công việc nhập toàn ký tự chữ vào các trường bắt buộc, giữ nguyên giá trị workflow mặc định và chọn hiển thị với tất cả thành viên trong dự án', function () {
    bizticket.getHeaderMenu('Nhóm công việc').click();
    bizticket.getCreateNewGroup().click();
    // let group_name = faker.string.alpha({ length: { min: 1, max: 1 } })
    let group_name = faker.string.alpha({ length: { min: 1, max: 10 } })
    let group_description = faker.lorem.lines(1).replace(/\.$/, '');
    
    create_group.getGroupName().should('have.attr', 'required');
    cy.inputText(create_group.getGroupName(), group_name);
    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.visible');
    create_group.getGroupDescription().should('have.attr', 'required');
    cy.inputText(create_group.getGroupDescription(), group_description);
    cy.checkRadio(create_group.getDisplayToAllMembers());
    create_group.getSubmit().click();

    let group_info = {
        "group_name": group_name,
        "group_description": group_description
    }
    cy.writeFile(data.file_path, group_info);
});

When('Tạo mới nhóm công việc nhập toàn ký tự số vào các trường bắt buộc, mở droplist chọn giá trị workflow tùy chỉnh và chọn chỉ hiển thị với những thành viên được chỉ định, nhập tên hoặc email thành viên', function () {
    bizticket.getHeaderMenu('Nhóm công việc').click();
    bizticket.getCreateNewGroup().click();

    let group_name = "0" + `${faker.datatype.number({ min: 0, max: 1000000000000 })}`.toString()
    cy.inputText(create_group.getGroupName(), group_name);
    
    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.exist');
    create_group.getWorkflowOption().select(data.work_flow.customize.value, {force: true});
    create_group.getSelectedWorkflow(data.work_flow.default.text).should('not.be.exist');
    create_group.getSelectedWorkflow(data.work_flow.customize.text).should('be.exist');

    let group_description = "0" + `${faker.datatype.number({ min: 0, max: 1000000000000 })}`.toString()
    cy.inputText(create_group.getGroupDescription(), group_description);
    cy.selectOnlyDisplayTodMember(data.account_id, account.username)
    create_group.getSubmit().click();

    let group_info = {
        "group_name": group_name,
        "group_description": group_description
    }
    cy.writeFile(data.file_path, group_info);
});