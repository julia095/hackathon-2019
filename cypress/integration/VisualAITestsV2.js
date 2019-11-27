/// <reference types = "cypress" />
import * as gs from '../page-elements/PageElements';
import { url, urlAdds } from '../page-elements/utilities';
import {loginDataAI} from '../testdata/test-data'

describe('Visual validation tests', () => {
  beforeEach(() => {
    cy.visit(url);    
    cy.eyesOpen({
      appName: 'Hackathon 2019',
      browser: { width: 800, height: 600 },
      batchName: 'Visual validation tests',
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('Login page should look correct', () => {
    cy.eyesCheckWindow('Main Page');
  });

  loginDataAI.forEach(data => {
    it(`should ${data.testName}`, function() {
      cy.get(gs.inputUserName).invoke('val', data.userName);
      cy.get(gs.inputPassword).invoke('val', data.password);
      cy.get(gs.btnSignIn).click();
      cy.eyesCheckWindow(`${data.testName}`);
    });
  })


it('Should sort table by ascending order when click on the header', () => {
    cy.login(url);
    cy.get(gs.btnAmountSort).click();
    cy.eyesCheckWindow('Table sort');
  });

it('Should display a bar chart comparing the expenses for the year 2017 and 2018 & Add data for 2019', () => {
    cy.login(url);
    cy.get(gs.btnCompareExpenses).click();
    cy.wait(4000);
    cy.eyesCheckWindow('Display a chart for 2017 and 2018');
    cy.get(gs.btnShowNextYear).click();
    cy.wait(4000);
    cy.eyesCheckWindow('Add data for the year 2019');
  });

it('Should dynamic gifs exist', function() {
  cy.login(urlAdds);  
  cy.eyesCheckWindow('Dynamic gifs exist and correct');
  });
});

