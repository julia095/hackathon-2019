/// <reference types = "cypress" />
/*Open the login page and write assertions to ensure everything looks OK on that page. 
i.e. add assertions to ensure all the fields, labels and all other items exist.*/
import * as gs from '../selectors/PageElements';
describe('Login page UI elements test', function () {
    before(function () {
        cy.visit('https://demo.applitools.com/hackathon.html');
    })
    it('Should display a header image', function () {
        // Should be on the right place - not possible
        // Should look correctly - not possible
        // Should be visible
        cy.get(gs.imgLogo).find('img').should('be.visible')
        // Should have a link to index page
        cy.get(gs.imgLogo).find('a').should('have.attr', 'href', 'index.html');           
    })

    it('Should display Login form header correctly', function () {
        // Should be on the right place -  not possible
        // Should contain correct text
        cy.get(gs.titleLogin).should('contain','Login Form');           
    })

    it('Should display UserName input correctly', function () {
        //Should be on the right place - not possible
        //Username title is visible and contains username
        cy.get(gs.titleUsernameInput).should('be.visible').and('contain','Username');
        //Username image is visible
        cy.get(gs.imgUserName).should('be.visible')
        //Username image should look correct - not possible
        //Username input is on the place and it displays text hint
        cy.get(gs.inputUserName).should('be.visible')
        .and('have.attr','placeholder','Enter your username');
    })

    it('Should display Password input correctly', function () {
        //Should be on the right place - not possible
        //Password title is visible and contains correct text
        cy.get(gs.titlePasswordInput).should('be.visible').and('contain','Password');
        //Password image is visible
        cy.get(gs.imgPassword).should('be.visible')
        //Password image should look correct - not possible
        //Password input is on the place and it displays text hint
        cy.get(gs.inputPassword).should('be.visible')
        .and('have.attr','placeholder','Enter your password');           
    })

    it('Should display Sign in button correctly', function () {
        //Should be on the right place and right size - not possible
        //Contains Sign in text
        //Background is blue - can't actually check ,'btn.btn-primary' - can change the color of the button
        cy.get(gs.btnSignIn).should('contain','Sign in')
          
    })

    it('Should display Remember me checkbox correctly', function () {
        //Should be on the right place and right size - not possible to check
        //Checkbox is visible
        cy.get(gs.chbxRememberme).find('input')
            .should('have.class','form-check-input')
            .and('be.visible');
        //It has Remember me text close to it
        cy.get(gs.chbxRememberme).find('label')
            .should('contain','Remember Me');          
    })

    it('Should display 3 images under sign in button ', function () {
        // Should be on the right place and right size - not possible to ensure without using additional page diff tools
        // And even in this case so many times will be wrong results
        // Should be visible
        cy.get(gs.imgTwitter).should('be.visible');
        cy.get(gs.imgFacebook).should('be.visible');
        cy.get(gs.imgLinkedin).should('be.visible');
        // Should be correct image - not possible          
    })
})

describe.only('Data driven tests', function () {
    beforeEach(function () {
        cy.visit('https://demo.applitools.com/hackathon.html');
    })
    const loginData = [
        {
            testName: 'throw an error with no username and password',
            userName: '',
            password: '',
            expectedResult: 'Both Username and Password must be present ',
            redirect: false
        },
        {
            testName: 'throw an error with username, but with no password',
            userName: 'user',
            password: '',
            expectedResult: 'Password must be present',
            redirect: false
        },
        {
            testName: 'throw an error with password, but with no username',
            userName: '',
            password: 'password',
            expectedResult: 'Username must be present',
            redirect: false
        },
        {
            testName: 'let you login with both username and password',
            userName: 'username',
            password: 'password',
            expectedResult: 'https://demo.applitools.com/hackathonApp.html',
            redirect: true

        }
    ];
    loginData.forEach((data) => {
        it(`should ${data.testName}`, function () {
            cy.get(gs.inputUserName).invoke('val', data.userName);
            cy.get(gs.inputPassword).invoke('val', data.password);
            cy.get(gs.btnSignIn).click();
            if (data.redirect === false) {
                cy.get(gs.divErrorAlert).should('contain', data.expectedResult);
            } else {
                cy.url().should('be.equal', data.expectedResult);
            }
        })
    })
});