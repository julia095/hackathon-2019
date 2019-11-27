/// <reference types = "cypress" />
import * as gs from '../page-elements/PageElements';
import { urlV2, urlAddsV2 } from '../support/config';
import {loginDataV2} from '../testdata/test-data';
import { StoreTableDataInArray } from '../support/util-functions';

describe('Login page UI elements test', function() {
  before(function() {
    cy.visit(urlV2);
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

  it('Should display a header image correctly', function() {
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

  it('Should display UserName input correctly', function() {
    //Should be on the right place and look right - not possible
  });

  it('Should Username title be visible and contain username', function() {
    cy.get(gs.titleUsernameInput)
      .should('be.visible')
      .and('contain', 'Username');
  });

  it('Should Username title be visible and contain username', function() {
    cy.get(gs.titleUsernameInput)
      .should('be.visible')
      .and('contain', 'Username');
  });

  it('Should Username image be visible', function() {
    cy.get(gs.imgUserName).should('be.visible');
  });
  
  it('Should display Username image correctly', function() {
    // Should be on the right place - not possible
    // Should look correctly - not possible
  });
  
  it('Should Username input be displayed correctly', function() {
    // Should be on the right place - not possible
    // Should look correctly - not possible
  });

  it('Should Username input display text hint', function() {
    cy.get(gs.inputUserName)
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Enter your username');
  });

  it('Should display Password input correctly', function() {
    //Should be on the right place and look right - not possible
  });

  it('Should password title be visible and contain correct text', function() {
    cy.get(gs.titlePasswordInput)
      .should('be.visible')
      .and('contain', 'Password');
  })    
  
  it('Should password image be visible', function() {
    cy.get(gs.imgPassword).should('be.visible');
  })
    
  it('Should display password image correctly ', function() {
    //Should be on the right place and look right - not possible
  })  
    
  it('Should display Password input correctly ', function() {
    //Should be on the right place and look right - not possible
  })

  it('Should display Password input correctly ', function() {
    //Should be on the right place and look right - not possible
  })

  it('Should Password input display text hint ', function() {
    cy.get(gs.inputPassword)
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Enter your password');
  })
    

  it('Should display Sign in button correctly', function() {
    //Should be on the right place and look right - not possible
    //Background is blue - can't actually check ,'btn.btn-primary' - can change the color of the button
  });

  it('Should display Sign in button contain correct text', function() {
    cy.get(gs.btnSignIn).should('contain', 'Log In');
  });

  it('Should display Remember me checkbox correctly', function() {
    //Should be on the right place and look right - not possible
  });

  it('Should display Remember me checkbox be visible and have correct text close to it', function() {
    cy.get(gs.chbxRememberme)
      .find('input')
      .should('have.class', 'form-check-input')
      .and('be.visible');
    cy.get(gs.chbxRememberme)
      .find('label')
      .should('contain', 'Remember Me');
  });

  it('Should 3 images under sign in button look correctly', function() {
    //Should be on the right place and look right - not possible to ensure without using additional page diff tools
  })

  it('Should 3 images under sign in button be visible ', function() {
    cy.get(gs.imgTwitter).should('be.visible');
    cy.get(gs.imgFacebook).should('be.visible');
    cy.get(gs.imgLinkedin).should('be.visible');
  });
});

describe('Data driven tests', function() {
  beforeEach(function() {
    cy.visit(urlV2);
  });
  loginDataV2.forEach(data => {
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
    cy.login(urlV2);
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
    cy.login(urlV2);
  });
  it('Should sort display a bar chart comparing the expenses for the year 2017 and 2018', function() {
    // not possible as a bar chart is represented as a single canvas. I'm not able to reach graphs
  });
  it('Should add the data for the year 2019', function() {
    // not possible as a bar chart is represented as a single canvas. I'm not able to reach graphs
  });
});

describe('Dynamic content test', function() {
  before(function() {
    cy.login(urlAddsV2);
  });
  it('Should dynamic gifs exist', function() {
    cy.get(gs.imgAdvert1).should('be.visible');
    cy.get(gs.imgAdvert2).should('be.visible');
  });
  it('Should ads display correct information', function() {
    //not possible to ensure that gifs display what we need to see
  });
});
