/// <reference types = "cypress" />
import * as gs from '../../page-elements/PageElements';
import { url, urlRedirect, urlAdds, urlV1 } from '../../page-elements/utilities';
import {loginDataAI} from '../testdata/test-data'

describe('Login page UI elements test', () => {
  beforeEach(() => {
    cy.visit(urlV1);
    cy.eyesOpen({
      appName: 'Hackathon 2019',
      browser: { width: 800, height: 600 },
      batchName: 'Visual Validation',
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('Should look correct', () => {
    cy.eyesCheckWindow('Main Page');
  });
});

describe('Data driven tests', () => {
  beforeEach(() => {
    cy.visit(urlV1);
    cy.eyesOpen({
      appName: 'Hackathon 2019',
      browser: { width: 800, height: 600 },
      batchName: 'Visual validation',
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });
  loginDataAI.forEach(data => {
    it(`should ${data.testName}`, function() {
      cy.get(gs.inputUserName).invoke('val', data.userName);
      cy.get(gs.inputPassword).invoke('val', data.password);
      cy.get(gs.btnSignIn).click();
      cy.eyesCheckWindow(`${data.testName}`);
    });
  });
});

describe('Table sort test', function() {
  beforeEach(() => {
    cy.visit(urlV1);
    cy.eyesOpen({
      appName: 'Hackathon 2019',
      browser: { width: 800, height: 600 },
      batchName: 'Visual Validation',
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('Should sort table by ascending order when click on the header', () => {
    cy.get(gs.btnAmountSort).click();
    cy.eyesCheckWindow('Table sort');
  });
});

describe('Canvas chart test', function() {
  beforeEach(() => {
    cy.visit(urlV1);
    cy.eyesOpen({
      appName: 'Hackathon 2019',
      browser: { width: 800, height: 600 },
      batchName: 'Visual Validation',
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('Should display a bar chart comparing the expenses for the year 2017 and 2018', () => {
    cy.get(gs.btnAmountSort).click();
    cy.eyesCheckWindow('Display a chart for 2017 and 2018');
  });

  it('Should add the data for the year 2019', () => {
    cy.get(gs.btnAmountSort).click();
    cy.eyesCheckWindow('Add data for the year 2019');
  });
});

describe('Dynamic content test', function() {
  before(function() {
    cy.login(urlAdds);
    cy.eyesOpen({
      appName: 'Hackathon 2019',
      browser: { width: 800, height: 600 },
      batchName: 'Visual Validation',
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('Should dynamic gifs exist', function() {
    cy.eyesCheckWindow('Dynamic gifs exist and correct');
  });
});
