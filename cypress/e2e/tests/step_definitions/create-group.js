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
    let group_name = faker.string.alpha({ length: { min: 1, max: 10 } });
    let group_description = faker.string.alpha({ length: { min: 1, max: 10 } });
    cy.inputGroupNameAndGroupDescription(group_name, group_description);
    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.visible');    
    cy.checkRadio(create_group.getDisplayToAllMembers());
    cy.verifyWhenSelectDisplayToAllMembers(create_group);
    create_group.getSubmit().click();
});

When('Tạo mới nhóm công việc nhập toàn ký tự số vào các trường bắt buộc, mở droplist chọn giá trị workflow tùy chỉnh và chọn chỉ hiển thị với những thành viên được chỉ định, nhập tên hoặc email thành viên', function () {
    let group_name = faker.string.numeric({ length: { min: 1, max: 10 } });
    let group_description = faker.string.numeric({ length: { min: 1, max: 10 } });
    cy.inputGroupNameAndGroupDescription(group_name, group_description);

    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.exist');
    create_group.getWorkflowOption().select(data.work_flow.customize.value, {force: true});
    create_group.getSelectedWorkflow(data.work_flow.default.text).should('not.be.exist');
    create_group.getSelectedWorkflow(data.work_flow.customize.text).should('be.exist');

    cy.selectOnlyDisplayToMember(data.account_id, account.username);

    create_group.getSubmit().click();
});

When ('Tạo mới nhóm công việc nhập ký tự đặc biệt vào các trường bắt buộc và chọn chỉ hiển thị với những thành viên được chỉ định, nhập tên nhóm thành viên', function() {
    let group_name = data.special_characters;
    let group_description = data.special_characters;
    cy.inputGroupNameAndGroupDescription(group_name, group_description);
    
    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.exist');
    create_group.getWorkflowOption().select(data.work_flow.customize.value, {force: true});
    create_group.getSelectedWorkflow(data.work_flow.default.text).should('not.be.exist');
    create_group.getSelectedWorkflow(data.work_flow.customize.text).should('be.exist');

    let random_index = faker.number.int( { max: 2 } )
    // faker.number.int({ min: 0, max: Object.keys(account.group_member).length });
    cy.selectOnlyDisplayToGroup(data.group_member[random_index].value, data.group_member[random_index].text)
    create_group.getSubmit().click();
})

When ('Tạo mới nhóm công việc nhập chữ, số, ký tự đặc biệt vào tên nhóm công việc và nhập chữ, số, ký tự đặc biệt và có xuống dòng vào mô tả nhóm công việc', function() {
    let group_name = faker.music.songName() + " "
    + faker.string.symbol({ min: 1, max: 3 })
    + faker.string.numeric({ length: { min: 1, max: 3 } });
    let group_description = faker.lorem.lines( { min: 2, max: 5 } ).replace(/\.$/, '');
    cy.inputGroupNameAndGroupDescription(group_name, group_description);
    
    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.visible');
    cy.checkRadio(create_group.getDisplayToAllMembers());
    create_group.getSubmit().click();
});

When ('Tạo mới nhóm công việc bỏ trống trường Tên nhóm công việc mới', function() {
    create_group.getGroupName().should('have.attr', 'required');
    let group_description = faker.music.songName();
    cy.inputGroupNameAndGroupDescription('{backspace}', group_description);

    // Chưa check đc tooltip
    // create_group.getGroupName().realHover()
    // create_group.getGroupName().should('have.text', 'Please fill out this field')

    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.visible');
    
    cy.checkRadio(create_group.getDisplayToAllMembers());
    create_group.getSubmit().click();
})

When ('Tạo mới nhóm công việc nhập toàn space vào trường Tên nhóm công việc mới', function() {
    let group_description = faker.music.songName();
    cy.inputGroupNameAndGroupDescription("          ", group_description);

    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.visible');
    cy.checkRadio(create_group.getDisplayToAllMembers());
    create_group.getSubmit().click();
})

When ('Tạo mới nhóm công việc bỏ trống trường Mô tả nhóm công việc mới', function() {
    create_group.getGroupDescription().should('have.attr', 'required');
    let group_name = faker.music.songName();
    cy.inputGroupNameAndGroupDescription(group_name, '{backspace}');
    
    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.visible');
    cy.checkRadio(create_group.getDisplayToAllMembers());
    create_group.getSubmit().click();
})

When ('Tạo mới nhóm công việc nhập toàn space vào trường Mô tả nhóm công việc mới', function() {
    let group_name = faker.music.songName();
    cy.inputGroupNameAndGroupDescription(group_name, "          ");

    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.visible');
    cy.checkRadio(create_group.getDisplayToAllMembers());
    create_group.getSubmit().click();
})

When ('Tạo mới nhóm công việc bỏ trống trường Nhập tên hoặc email thành viên', function() {
    let group_name = faker.music.songName();
    let group_description = faker.music.songName();
    cy.inputGroupNameAndGroupDescription(group_name, group_description);

    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.visible');

    cy.selectOnlyDisplayToMember(null);
    create_group.getSubmit().click();
})

When ('Tạo mới nhóm công việc bỏ trống trường Nhập tên nhóm thành viên', function() {
    let group_name = faker.music.songName();
    let group_description = faker.music.songName();
    cy.inputGroupNameAndGroupDescription(group_name, group_description);

    create_group.getSelectedWorkflow(data.work_flow.default.text).should('be.visible');

    cy.selectOnlyDisplayToGroup(null);
    create_group.getSubmit().click();
})

When ('Tạo mới nhóm công việc và bấm Hủy', function() {
    create_group.getCreateGroupModal().should('be.visible');
    create_group.getCancel().dblclick();
    cy.wait(1000);
})