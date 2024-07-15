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

// edit_group_01
When ('Chỉnh sửa nhóm công việc vừa tạo nhập 5 ký tự chữ vào các trường text, upload avatar, chọn tất cả có thể tương tác, để trống các trường dropdown, các trường radio chọn không, chọn tạo ticket bình thường, chọn danh sách dạng bảng', function() {
    bizticket.getGroupSetting().click();
    let group_name = faker.string.alpha(5);
    let group_description = faker.string.alpha(5);
    cy.editGroupNameAndGroupDescription(group_name, group_description);

    // edit_group.getAvatar().selectFile(data.imagine_path, { force: true } );
    // cy.get('div[class="d-flex align-items-end avatar"]').find('img').invoke('attr', 'src').then(function(scr) {
    //     cy.readFile(data.file_path).then(function (group_info) {
    //         group_info.avatar_src = src
    //         cy.writeFile(data.file_path, group_info);
    //     });
    // })

    cy.checkRadio(edit_group.getDisplayToAllMembers());
    cy.verifyWhenSelectDisplayToAllMembers(edit_group);

    cy.selectRadioInGeneralInfo(edit_group.getAssignCreatorAsHandler(),0);
    cy.selectRadioInGeneralInfo(edit_group.getAssignCreatorAsRelatedPerson(),0);
    cy.selectRadioInGeneralInfo(edit_group.getAssignCreatorAsAcceptPerson(),0);
    cy.selectRadioInGeneralInfo(edit_group.getAssignCreatorAsSupervisor(),0);
    cy.selectRadioInGeneralInfo(edit_group.getFinishTicketRole(),0);
    cy.selectRadioInGeneralInfo(edit_group.getSettingSendNoti(),0);
    cy.selectRadioInGeneralInfo(edit_group.getTicketCreateType(),0);

    edit_group.getSelectTicketViewType()
    .select('bang', { force: true })
    .should('have.value', 'bang');
    
    cy.selectRadioInGeneralInfo(edit_group.getTicketViewPermission(),0)

    edit_group.getSubmit().click();
})

// edit_group_02
When ('Chỉnh sửa nhóm công việc vừa tạo nhập 6 ký tự số vào các trường text, không upload avatar, chọn chỉ thành viên được chọn có thể tương tác, các trường dropdown chọn tên thành viên, các trường radio chọn có, chọn tạo full ticket, chọn danh sách dạng danh sách', function() {
    
    // cy.get('div[title="Tổng quan dự án"]').realHover() // Simulate hover action
    // .wait(500)
    // .should('be.visible') // Tooltip should be visible
    // .should('contain.text', 'Tổng quan dự án'); 
    bizticket.getGroupSetting().click();

    let group_name = faker.string.numeric(6);
    let group_description = faker.string.numeric(6);
    cy.editGroupNameAndGroupDescription(group_name, group_description);

    // Hệ thống mặc định chọn tên thành viên là người tạo nên value tên thành viên đã bị disable
    edit_group.getOnlyDisplayToAsignedMembers().check().should('be.checked');
    // edit_group.getAsignedMembers().select(data.account_id, {force: true} ).should('have.value', data.account_id)

    cy.selectDropdownInGeneralInfo(edit_group.getDefaultHandler(), data.account_id, account.username);
    cy.selectDropdownInGeneralInfo(edit_group.getDefaultRelatedPerson(), data.account_id, account.username);
    cy.selectDropdownInGeneralInfo(edit_group.getDefaultAcceptPerson(), data.account_id, account.username);

    cy.selectRadioInGeneralInfo(edit_group.getAssignCreatorAsHandler(),1);
    cy.selectRadioInGeneralInfo(edit_group.getAssignCreatorAsRelatedPerson(),1);
    cy.selectRadioInGeneralInfo(edit_group.getAssignCreatorAsAcceptPerson(),1);
    cy.selectRadioInGeneralInfo(edit_group.getAssignCreatorAsSupervisor(),1);
    cy.selectRadioInGeneralInfo(edit_group.getFinishTicketRole(),1);
    cy.selectRadioInGeneralInfo(edit_group.getSettingSendNoti(),1);
    cy.selectRadioInGeneralInfo(edit_group.getTicketCreateType(),1);

    edit_group.getSelectTicketViewType()
    .select('danhsach', { force: true })
    .should('have.value', 'danhsach');
    
    cy.selectRadioInGeneralInfo(edit_group.getTicketViewPermission(),1);

    edit_group.getSubmit().click();
})

// edit_group_03
When ('Chỉnh sửa nhóm công việc vừa tạo nhập 6 ký tự đặc biệt vào các trường text, chọn chỉ thành viên được chọn có thể tương tác và thêm tên nhóm thành viên, các trường dropdown chọn tên nhóm thành viên, chọn danh sách dạng lịch', function() {
    bizticket.getGroupSetting().click();

    let group_name = data.special_characters;
    let group_description = data.special_characters;
    cy.editGroupNameAndGroupDescription(group_name, group_description)

    let random_index = faker.number.int( {max: 2 } )
    cy.log(random_index)
    let group_member_value = data.group_member[random_index].value + "_group";
    let group_member_text = data.group_member[random_index].text;

    edit_group.getOnlyDisplayToAsignedMembers().check().should('be.checked');
    edit_group.getAsignedMembers().select(group_member_value, {force: true} );
    // cy.trimSpaceAndCheckValue(edit_group.getAsignedMembers(), group_member_value)
    
    cy.readFile(data.file_path).then(function (group_info) {
        group_info.display = "only";
        group_info.viewer = group_member_text;
        cy.writeFile(data.file_path, group_info);
      })

    cy.selectDropdownInGeneralInfo(edit_group.getDefaultHandler(), group_member_value, group_member_text);
    cy.selectDropdownInGeneralInfo(edit_group.getDefaultRelatedPerson(), group_member_value, group_member_text);
    cy.selectDropdownInGeneralInfo(edit_group.getDefaultAcceptPerson(), group_member_value, group_member_text);

    edit_group.getSelectTicketViewType()
    .select('lich', { force: true })
    .should('have.value', 'lich');
    edit_group.getSubmit().click();
})

// edit_group_04
When ('Chỉnh sửa nhóm công việc vừa tạo nhập chữ, số, ký tự đặc biệt vào các trường text, chọn danh sách dạng bảng biểu', function() {
    bizticket.getGroupSetting().click();

    let group_name = faker.music.songName() + " "
    + faker.string.symbol(3)
    + faker.string.numeric(3);
    let group_description = faker.lorem.lines(1).replace(/\.$/, '');
    cy.editGroupNameAndGroupDescription(group_name, group_description);

    let random_index = faker.number.int( {max: 2 } );
    let group_member_value = data.group_member[random_index].value + "_group";
    let group_member_text = data.group_member[random_index].text;
    let selected_value_arr = [data.account_id,group_member_value];
    let selected_text_arr = [account.username,group_member_text];

    cy.selectMultipleOptionsInGeneralInfo(edit_group.getDefaultHandler(),selected_value_arr,selected_text_arr);
    cy.selectMultipleOptionsInGeneralInfo(edit_group.getDefaultRelatedPerson(),selected_value_arr,selected_text_arr);
    cy.selectMultipleOptionsInGeneralInfo(edit_group.getDefaultAcceptPerson(),selected_value_arr,selected_text_arr);

    edit_group.getSelectTicketViewType()
    .select('bangbieu', { force: true })
    .should('have.value', 'bangbieu');
    
    edit_group.getSubmit().click();
})

// edit_group_05
When ('Chỉnh sửa nhóm công việc chọn danh sách dạng báo cáo', function() {
    bizticket.getGroupSetting().click();
    edit_group.getSelectTicketViewType()
    .select('baocao', { force: true }).should('have.value', 'baocao');
    edit_group.getSubmit().click();
})