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

When ('Thực hiện chỉnh sửa nhóm công việc', function() {
    cy.selectRadioInGeneralInfo(edit_group.getAssignCreatorAsHandler(),1)
})