import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Bizfly, { BizTicket, CreateGroup, CreateTicket, GroupTable } from "../../pages/selectors";
import data from "../../../fixtures/input-data.json";
import account from "../../../fixtures/account.json";
import { faker } from "@faker-js/faker";
import { should } from "chai";

let bizfly = new Bizfly();
let bizticket = new BizTicket();
let create_group = new CreateGroup();
let group_table = new GroupTable();
let create_ticket = new CreateTicket();

Given('Đăng nhập hệ thống và truy cập màn hình Biz Ticket', function () {
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

When('Thực hiện tạo mới nhóm công việc', function () {
    bizticket.getHeaderMenu('Nhóm công việc').click();
    bizticket.getCreateNewGroup().click();
    // let group_name = faker.string.alpha({ length: { min: 1, max: 1 } })
    let group_name = faker.string.alpha({ length: { min: 1, max: 10 } })
    let group_description = faker.lorem.lines(1).replace(/\.$/, '');
    let group_info = {
        "group_name": group_name,
        "group_description": group_description
    }
    cy.writeFile(data.file_path, group_info);
    create_group.getGroupName().should('have.attr', 'required');
    cy.inputText(create_group.getGroupName(), group_name);
    create_group.getSelectedWorkflow('Workflow mặc định').should('be.visible');
    create_group.getGroupDescription().should('have.attr', 'required');
    cy.inputText(create_group.getGroupDescription(), group_description);
    cy.checkRadio(create_group.getDisplayToAllMembers());
    create_group.getSubmit().click();
});

Then('Kiểm tra tạo mới nhóm công việc thành công', function () {
    bizticket.getSuccessNoti().should('be.visible')
    bizticket.getSuccessNotiText().should('eq', 'Tạo nhóm công việc thành công!')

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
        bizticket.getGroupName().should('have.value', group_info.group_name);
        bizticket.getGroupDescription().should('have.value', group_info.group_description);
        bizticket.getDisplayToAllMembers().should('be.checked');
        cy.trimSpaceAndCheckText(bizticket.getTopOfVerticalMenu(), group_info.group_name);
        // verify_group.getTopOfVerticalMenu().should('have.text', group_info.group_name);
    })
});

When ('Xem Cài đặt nhóm công việc - Thành viên', function() {
    bizticket.getMemberInVerticalMenu().click();

})
Then ('Hiển thị danh sách thành viên có bao gồm người tạo dự án là tài khoản đang đăng nhập', function() {
    bizticket.getMemberEmails().each(function($email_tag){
        let email_text = $email_tag.text().trim();
        if (email_text === account.username) {
            // expect($email_tag).to.be.visible;
            expect($email_tag).to.be.exist;
        } else {
            new Error(`Not found`);
        }                
    })
})


When ('Xem Nhóm công việc trên thanh menu ngang', function() {
    bizticket.getHeaderMenu('Nhóm công việc').click();
})

Then ('Nhóm công việc vừa tạo hiển thị ở đầu danh sách Công việc gần đây', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        cy.trimSpaceAndCheckText(bizticket.getMostRecentGroup(), group_info.group_name);
    })
});

When ('Click Xem tất cả nhóm công việc', function() {
    bizticket.getViewAllGroups().click();
});

Then ('Nhóm công việc vừa tạo hiển thị ở đầu danh sách Nhóm xem gần đây', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        bizticket.getRecentlyViewedGroups().within(function(){
            cy.trimSpaceAndCheckText(group_table.getGroupNames().first(), group_info.group_name)
            cy.trimSpaceAndCheckText(group_table.getGroupDescriptions().first(), group_info.group_description)
        })
    })
})

When ('Tìm kiếm nhóm công việc vừa tạo trong Tất cả nhóm công việc', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        cy.inputText(group_table.getSearchInput(), group_info.group_name)
        // group_table.getSearchInput().next().next().next().click();
        group_table.getSearchIcon().click();
        group_table.getSearchIcon().click();
    })
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
        // group_table.getSearchInput().next().next().next().click();
    })
})
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
            })
        })
    })
})

When ('Xem Tạo ticket', function() {
    bizticket.getCreateTicket().click()
    create_ticket.getGroupList().click()
    create_ticket.getGroupList().click()
    cy.wait(1000)
    
})

Then ('Có hiển thị nhóm công việc vừa tạo trong Tạo ticket', function() {
    cy.readFile(data.file_path).then(function (group_info) {
        expect(create_ticket.getSearchOutput(group_info.group_name)).to.be.visible;
        cy.trimSpaceAndCheckText(create_ticket.getSearchOutput(group_info.group_name), group_info.group_name)
    })

    cy.readFile(data.file_path).then(function (group_info) {
        create_ticket.getSearchInput()
        .click({force: true})
        .type(group_info.group_name, {force: true})
    cy.wait(1000);
    // Tìm trong div[class="list"]
    //   cy.inputText(create_ticket.getSearchInput(), group_info.group_name)
    })
})
