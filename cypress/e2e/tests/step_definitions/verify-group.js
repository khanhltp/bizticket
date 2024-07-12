import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Bizfly, { BizTicket, CreateGroup, CreateTicket, EditGroup, GroupTable } from "../../pages/selectors";
import data from "../../../fixtures/input-data.json";
import account from "../../../fixtures/account.json";
import { faker } from "@faker-js/faker";

let bizfly = new Bizfly();
let bizticket = new BizTicket();
let create_group = new CreateGroup();
let group_table = new GroupTable();
let create_ticket = new CreateTicket();
let edit_group = new EditGroup();

Then('Thông báo {string} khi tạo mới thành công', function (message) {
    cy.verifyToastMessage(message)

    cy.readFile(data.file_path).then(function (group_info) {
        bizticket.getGroupTitle().should('eq', group_info.group_name)
    })
    cy.trimSpaceAndCheckText(bizticket.getTotalTicket(), '0 Ticket')
    bizticket.getEachTypeOfTicket().each(($type) => {
        expect($type.text().trim()).to.contain('(0)')
    });
});

When ('Xem Cài đặt nhóm công việc - Thông tin chung', function() {
    bizticket.getGroupSetting().click();
});

Then ('Hiển thị đúng thông tin đã nhập trong quá trình tạo nhóm công việc', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        edit_group.getGroupName().should('have.value', group_info.group_name);
        edit_group.getGroupDescription().should('have.value', group_info.group_description);
        if (group_info.display === 'all') {
            cy.verifyDisplayToAll();
            }
        if (group_info.display === 'only') {
            cy.verifyDisplayToOnly(group_info.viewer);
            }
        cy.trimSpaceAndCheckText(bizticket.getTopOfVerticalMenu(), group_info.group_name);
    });
});

When ('Xem Cài đặt nhóm công việc - Thành viên', function() {
    bizticket.getMemberInVerticalMenu().click();
});

Then ('Hiển thị danh sách thành viên có bao gồm người tạo dự án là tài khoản đang đăng nhập', function() {
    bizticket.getMemberEmails().each(function($email_tag){
        let email_text = $email_tag.text().trim();
        if (email_text === account.username) {
            // expect($email_tag).to.be.visible;
            expect($email_tag).to.be.exist;
        } else {
            new Error(`Not found`);
        }                
    });
});


When ('Xem Nhóm công việc trên thanh menu ngang', function() {
    bizticket.getHeaderMenu('Nhóm công việc').click();
});

Then ('Nhóm công việc vừa tạo hiển thị ở đầu danh sách Công việc gần đây', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        cy.trimSpaceAndCheckText(bizticket.getMostRecentGroup(), group_info.group_name);
    });
});

When ('Click Xem tất cả nhóm công việc', function() {
    bizticket.getViewAllGroups().click();
});

Then ('Nhóm công việc vừa tạo hiển thị ở đầu danh sách Nhóm xem gần đây', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        bizticket.getRecentlyViewedGroups().within(function(){
            cy.trimSpaceAndCheckText(group_table.getGroupNames().first(), group_info.group_name)
            cy.trimSpaceAndCheckText(group_table.getGroupDescriptions().first(), group_info.group_description)
        });
    });
});

When ('Tìm kiếm nhóm công việc vừa tạo trong Tất cả nhóm công việc', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        cy.inputText(group_table.getSearchInput(), group_info.group_name)
        group_table.getSearchIcon().click();
        group_table.getSearchIcon().click();
    });
});

Then ('Hệ thống trả về kết quả tìm kiếm có nhóm công việc vừa tạo', function() {
    cy.log('Pending: Tìm kiếm không trả về kết quả')
});


When ('Xem Nhóm do bạn tạo', function() {
    bizticket.getYourCreatedGroups().click();
});

Then ('Nhóm công việc vừa tạo hiển thị ở cuối danh sách Nhóm do bạn tạo', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        // group_table.getGroupName(group_info.group_name).should('be.visible');
        cy.trimSpaceAndCheckText(group_table.getGroupNames().last(), group_info.group_name)
        cy.trimSpaceAndCheckText(group_table.getGroupDescriptions().last(), group_info.group_description)
    })
});

When ('Tìm kiếm nhóm công việc vừa tạo trong Nhóm do bạn tạo', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        cy.inputText(group_table.getSearchInput(), group_info.group_name)
        group_table.getSearchIcon().click();
        cy.wait(1000)
    });
});

Then ('Hệ thống trả về kết quả tìm kiếm chứa nhóm công việc vừa tạo', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        group_table.getSearchOutput().within(function(){
            group_table.getGroupNames().each(function($group_name_tag){
                let group_name_text = $group_name_tag.text().trim();
                let group_description_tag = $group_name_tag.next().next();
                let group_description_text = group_description_tag.text().trim();
                if (group_name_text === group_info.group_name 
                    && group_description_text === group_info.group_description) {
                    expect(group_name_text).to.equal(group_info.group_name);
                    expect(group_description_text).to.equal(group_info.group_description);
                } else {
                    new Error(`Not found`);
                }                
            });
        });
    });
});

When ('Xem Tạo ticket', function() {
    bizticket.getCreateTicket().click();
    cy.wait(1000)
    create_ticket.getGroupList().should('not.be.exist')
    create_ticket.getGroupOption().click();
    cy.wait(1000)
    create_ticket.getGroupList().should('be.exist')
    cy.wait(1000)
});

Then ('Hiển thị nhóm công việc vừa tạo ở cuối danh sách', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        create_ticket.getGroupList().within(function() {
            create_ticket.getGroupValue()
            .should('have.text', group_info.group_name);   
        });
    });
});
When ('Tìm kiếm nhóm công việc vừa tạo', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        cy.inputText(create_ticket.getSearchInput(), group_info.group_name)
        cy.wait(1000);
    });
});
Then ('Hệ thống trả về kết quả tìm kiếm có chứa nhóm công việc vừa tạo', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        create_ticket.getGroupList().within(function() {
            create_ticket.getGroupValue(group_info.group_name)
            .should('have.text', group_info.group_name);       
        });
    });
});

Then ('Hệ thống hiển thị tooltip {string}', function(tooltip_text) {
    cy.log('Pending: Chưa check được tooltip')
    // create_group.getGroupName().should('have.text', tooltip_text)
});


Then ('Thông báo {string} khi nhập toàn space vào trường Tên nhóm công việc mới', function(message) {
    cy.verifyToastMessage(message);
});

Then ('Thông báo {string} khi nhập toàn space vào trường Mô tả nhóm công việc mới', function(message) {
    cy.verifyToastMessage(message);
});

Then ('Thông báo {string} khi bỏ trống trường Nhập tên hoặc email thành viên', function(message) {
    cy.verifyToastMessage(message);
});

Then ('Thông báo {string} khi bỏ trống trường Nhập tên nhóm thành viên', function(message) {
    cy.verifyToastMessage(message);
});

Then ('Modal tạo mới nhóm việc làm đóng lại', function() {
    create_group.getCreateGroupModal().should('not.be.visible');
});

Then ('Thông báo {string} khi chỉnh sửa thành công', function(message){
    cy.verifyToastMessage(message);
    cy.verifyRadioInGeneralInfo(edit_group.getAssignCreatorAsHandler())  
});
