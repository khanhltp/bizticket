// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('inputText', function (element, text) {
  element
    .click( {force: true} )
    .clear( {force: true} )
    .type(text, {force: true})
    .invoke('val')
    .then(function (val) {
      if(text === '{backspace}') {
        text = ''
      }
      expect(val).to.eq(text)
    })
})

Cypress.Commands.add('checkRadio', function (element) {
  element
    .check()
    .should('be.checked')
})

Cypress.Commands.add('trimSpaceAndCheckText', function(element, expected_text) {
  let removeNbsp = function (string) {
    const space = /&nbsp;\s*$/;
    if (space.test(string)) {
      return string.replace(space, '');
    } else {
      return string;
    }
  }
  element.invoke('text').then(function(text) {
    let element_text = removeNbsp(text).trim();
    cy.wrap(element_text).should('eq', expected_text)
  });
})

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

import { BizTicket, CreateGroup, EditGroup } from "../e2e/pages/selectors";
import data from "../fixtures/input-data.json";

let create_group = new CreateGroup();
let bizticket = new BizTicket();
let edit_group = new EditGroup()

Cypress.Commands.add('inputGroupNameAndGroupDescription', function (group_name, group_description) {
  cy.inputText(create_group.getGroupName(), group_name);
  cy.log('alo 3')
  cy.inputText(create_group.getGroupDescription(), group_description);
  let group_info = {
      "group_name": group_name,
      "group_description": group_description
  }
  cy.writeFile(data.file_path, group_info);
})

Cypress.Commands.add('editGroupNameAndGroupDescription', function (group_name, group_description) {
  cy.inputText(edit_group.getGroupName().first(), group_name);
  cy.inputText(edit_group.getGroupDescription().first(), group_description);
  let group_info = {
      "group_name": group_name,
      "group_description": group_description
  }
  cy.writeFile(data.file_path, group_info);
})

Cypress.Commands.add('verifyToastMessage', function (message_text) {
  bizticket.getToastMessage().should('be.visible')
  bizticket.getMessageText().should('eq', message_text)
})

Cypress.Commands.add('verifyToastMessage', function (message_text) {
  bizticket.getToastMessage().should('be.visible')
  bizticket.getMessageText().should('eq', message_text)
})

Cypress.Commands.add('verifyWhenSelectDisplayToAllMembers', function (class_name) {
  class_name.getDisplayToAllMembers().should('be.checked');
  class_name.getOnlyDisplayToAsignedMembers().should('not.be.checked');
  cy.readFile(data.file_path).then(function (group_info) {
    group_info.display = "all";
    cy.writeFile(data.file_path, group_info);
  })
});

Cypress.Commands.add('selectOnlyDisplayToMember', function (member_id, member_name) {
  cy.checkRadio(create_group.getOnlyDisplayToAsignedMembers());
  create_group.getDisplayToAllMembers().should('not.be.checked');
  cy.checkRadio(create_group.getNameOrEmailRadio());

  if (member_id !== null ) {
    create_group.getNameOrEmailTag().select(member_id, {force: true})
    cy.trimSpaceAndCheckText(create_group.getSelectedValue(), member_name)
  } 
  cy.readFile(data.file_path).then(function (group_info) {
    group_info.display = "only";
    group_info.viewer = member_name
    cy.writeFile(data.file_path, group_info);
  })
});

Cypress.Commands.add('selectOnlyDisplayToGroup', function (group_value, group_name) {
  cy.checkRadio(create_group.getOnlyDisplayToAsignedMembers());
  create_group.getDisplayToAllMembers().should('not.be.checked');
  cy.checkRadio(create_group.getGroupNameRadio());
  if (group_value !== null) {
    create_group.getGroupNameTag().select(group_value, {force: true})
    cy.trimSpaceAndCheckText(create_group.getSelectedValue(), group_name)  
  }
  cy.readFile(data.file_path).then(function (group_info) {
    group_info.display = "only";
    group_info.viewer = group_name
    cy.writeFile(data.file_path, group_info);
  })
});

Cypress.Commands.add('verifyDisplayToOnly', function (member_or_group_name) {
  edit_group.getOnlyDisplayToAsignedMembers().should('be.checked');
  edit_group.getDisplayToAllMembers().should('not.be.checked');
  // cy.trimSpaceAndCheckText(edit_group.getViewer(), member_or_group_name);
});

Cypress.Commands.add('verifyDisplayToAll', function () {
  edit_group.getDisplayToAllMembers().should('be.checked');
  edit_group.getOnlyDisplayToAsignedMembers().should('not.be.checked');
});

let getUnselectedValue = function(selected_value) {
  if (selected_value === 0) {
    return 1
  }
  if (selected_value === 1) {
    return 0
  }
}

Cypress.Commands.add('selectRadioInGeneralInfo', function (element, selected_value) {
  element.then(function(element) {
    cy.wrap(element).find('label[class="mb-0"]').invoke('text').then(function(label_text) { 
      cy.wrap(element).find(`input[value=${selected_value}]`).check().should('be.checked');
      let name = element.find(`input[value=${selected_value}]`).attr('name');
      let unselected_value = getUnselectedValue(selected_value);
      cy.wrap(element).find(`input[value=${unselected_value}]`).should('not.be.checked');
      cy.readFile(data.file_path).then(function (group_info) {
        group_info[label_text] = {
          "name": name,
          "value": selected_value
        }
        cy.writeFile(data.file_path, group_info);
      });
    });
  });
});

Cypress.Commands.add('verifyRadioInGeneralInfo', function (element) {
  element.then(function(element) {
    cy.readFile(data.file_path).then(function (group_info) {
      cy.wrap(element).find('label[class="mb-0"]').invoke('text').then(function(label_text) {
        let name = group_info[label_text].name;
        let selected_value = group_info[label_text].value;
        let unselected_value = getUnselectedValue(selected_value);
        cy.wrap(element).find(`input[name=${name}]`).filter(`input[value=${selected_value}]`).should('have.length', 1).should('be.checked');
        cy.wrap(element).find(`input[name=${name}]`).filter(`input[value=${unselected_value}]`).should('have.length', 1).should('not.be.checked');
      });
    });
  });
});

Cypress.Commands.add('selectDropdownInGeneralInfo', function (element, selected_value, selected_text) {
  element.then(function(element) {
    cy.wrap(element).find('select').select(selected_value, { force: true } );
    cy.trimSpaceAndCheckText(cy.wrap(element).find('div[class="text-select"]'), selected_text)
    cy.wrap(element).find('label').invoke('text').then(function(label_text) {
      cy.readFile(data.file_path).then(function (group_info) {
        group_info[label_text] = selected_text
        cy.writeFile(data.file_path, group_info);
      });
    });
  });
});

Cypress.Commands.add('verifyDropdownInGeneralInfo', function (element) {
  element.then(function(element) {
    cy.readFile(data.file_path).then(function (group_info) {
        cy.wrap(element).find('label').invoke('text').then(function(label_text) {
        let selected_name = group_info[label_text];
        cy.trimSpaceAndCheckText(cy.wrap(element).find('div[class="text-select"]'), selected_name)
      });
    });
  });
});