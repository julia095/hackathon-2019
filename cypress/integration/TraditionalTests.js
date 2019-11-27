/// <reference types = "cypress" />
import * as gs from '../page-elements/PageElements';
import { urlV1, urlAddsV1 } from '../support/config';
import {loginDataV1} from '../testdata/test-data'
import { StoreTableDataInArray } from '../support/util-functions';

describe('Login page UI elements test', function() {
  before(function() {
    cy.visit(urlV1);
  });
  it('Should a header image be visible and have a link', function() {
    // Should be visible
    cy.get(gs.imgLogo)
      .find('img')
      .should('be.visible');
    // Should have a link to index page
    cy.get(gs.imgLogo)
      .find('a')
      .should('have.attr', 'href', 'index.html');
  });

  it('Should display a header image on the right place correctly', function() {
    // Should be on the right place - not possible
    // Should look correctly - not possible
  });

  it('Should Login form header contain correct text', function() {
    // Should contain correct text
    cy.get(gs.titleLogin).should('contain', 'Login Form');
  });

  it('Should display Login form header correctly', function() {
    // Should be on the right place - not possible
    // Should look correctly - not possible
  });

  /*Afterwards I put comments for each visual check which is not possible to
    implement instead of creating a separate test.*/

  it('Should display UserName input correctly', function() {
    //Should be on the right place and look right - not possible
    //Username title is visible and contains username
    cy.get(gs.titleUsernameInput)
      .should('be.visible')
      .and('contain', 'Username');
    //Username image is visible
    cy.get(gs.imgUserName).should('be.visible');
    //Username image should look correct - not possible
    //Username input is on the place and it displays text hint
    cy.get(gs.inputUserName)
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Enter your username');
  });

  it('Should display Password input correctly', function() {
    //Should be on the right place and look right - not possible
    //Password title is visible and contains correct text
    cy.get(gs.titlePasswordInput)
      .should('be.visible')
      .and('contain', 'Password');
    //Password image is visible
    cy.get(gs.imgPassword).should('be.visible');
    //Password image should look correct - not possible
    //Password input is on the place and it displays text hint
    cy.get(gs.inputPassword)
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Enter your password');
  });

  it('Should display Sign in button correctly', function() {
    //Should be on the right place and look right - not possible
    //Contains Sign in text
    //Background is blue - can't actually check ,'btn.btn-primary' - can change the color of the button
    cy.get(gs.btnSignIn).should('contain', 'Log In');
  });

  it('Should display Remember me checkbox correctly', function() {
    //Should be on the right place and look right - not possible
    //Checkbox is visible
    cy.get(gs.chbxRememberme)
      .find('input')
      .should('have.class', 'form-check-input')
      .and('be.visible');
    //It has Remember me text close to it
    cy.get(gs.chbxRememberme)
      .find('label')
      .should('contain', 'Remember Me');
  });

  it('Should display 3 images under sign in button ', function() {
    //Should be on the right place and look right - not possible to ensure without using additional page diff tools
    // And even in this case so many times will be wrong results
    // Should be visible
    cy.get(gs.imgTwitter).should('be.visible');
    cy.get(gs.imgFacebook).should('be.visible');
    cy.get(gs.imgLinkedin).should('be.visible');
    // Should be correct image - not possible
  });
});

describe('Data driven tests', function() {
  beforeEach(function() {
    cy.visit(urlV1);
  });
  loginDataV1.forEach(data => {
    it(`Should ${data.testName}`, function() {
      cy.get(gs.inputUserName).invoke('val', data.userName);
      cy.get(gs.inputPassword).invoke('val', data.password);
      cy.get(gs.btnSignIn).click();
      if (data.redirect === false) {
        cy.get(gs.divErrorAlert).should('contain', data.expectedResult);
      } else {
        cy.url().should('be.equal', data.expectedResult);
      }
    });

    it(`Should have correct position for  ${data.testName}`, function() {
      // not possible to test, if text will change position
    });
  });
});

describe('Table sort test', function() {
  before(function() {
    cy.login(urlV1);
  });
  it('Should sort table by ascending order when click on the header', function() {
    cy.wrap(StoreTableDataInArray().then(arr => {
      const sortedTableData = arr.sort((a, b) => a.amount - b.amount);
      cy.get(gs.btnAmountSort)
        .click()
        .then(() => {
          cy.wrap(StoreTableDataInArray().then((res) => {
            expect(res).to.deep.equal(sortedTableData);
          }))
        });
    }))    
  });
});

describe('Canvas chart test', function() {
  before(function() {
    cy.login(urlV1);
  });
  it('Should sort display a bar chart comparing the expenses for the year 2017 and 2018', function() {
    // not possible as a bar chart is represented as a single canvas. I'm not able to reach graphs
  });
  it('Should add the data for the year 2019', function() {
    // again not possible as a bar chart is represented as a single canvas. I'm not able to reach graphs
  });
});

describe('Dynamic content test', function() {
  before(function() {
    cy.login(urlAddsV1);
  });
  it('Should dynamic gifs exist', function() {
    cy.get(gs.imgAdvert1).should('be.visible');
    cy.get(gs.imgAdvert2).should('be.visible');
  });
  it('Should ads display correct information', function() {
    //not possible to ensure that gifs display what we need to see
  });
});
