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

When ('When Chỉnh sửa nhóm công việc vừa tạo nhập 5 ký tự chữ vào các trường text, upload avatar, chọn tất cả có thể tương tác, để trống các trường dropdown, các trường radio chọn không, chọn tạo ticket bình thường, chọn danh sách dạng bảng', function() {
    let group_name = faker.string.alpha(5)
    let group_description = faker.string.alpha(5)
    cy.editGroupNameAndGroupDescription(group_name, group_description)
    cy.selectRadioInGeneralInfo(edit_group.getAssignCreatorAsHandler(),1)
})