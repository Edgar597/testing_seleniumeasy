"use strict";
describe('verify Selenium_Easys Input Forms', function () {
    it('verify Simple Form Demo', function () {
        cy.visit('https://www.seleniumeasy.com/test/');
        //cy.reload()
        cy.get('#at-cv-lightbox-content a[href="#"]').click();
        cy.get('#navbar-brand-centered a[href="#"]').contains('Input Forms').click();
        cy.get('#navbar-brand-centered a[href="./basic-first-form-demo.html"]').click();
        cy.get('#user-message').click().type('hello my frend');
        cy.get('button[class="btn btn-default"]').contains('Show Message').click();
        cy.get('#user-message span').should('contain', 'hello my frend');
        cy.get('input[id="sum1"]').type(5);
        cy.get('input[id="sum2"]').type(6);
        cy.get('button[class="btn btn-default"]').contains('Get Total').click();
        cy.get('div [id="displayvalue"]').should('contain', '11');
    });
    it('verify CheckBox Demo', function () {
        cy.visit('https://www.seleniumeasy.com/test/');
        cy.get('#at-cv-lightbox-content a[href="#"]').click();
        cy.get('#navbar-brand-centered a[href="#"]').contains('Input Forms').click();
        cy.get('.dropdown-menu a[href="./basic-checkbox-demo.html"]').click();
        //cy.get('input[id="isAgeSelected"]').check()
        //cy.get('#txtAge[style="display: block;"]').should('contain','block;')
        cy.get('input[id="isAgeSelected"]').check({ force: true });
        cy.get('div[id="txtAge"]').should('contain', 'Success - Check box is checked');
        cy.get('.checkbox').contains('Option 1').click();
        cy.get('.checkbox').contains('Option 2').click();
        cy.get('.checkbox').contains('Option 3').click();
        //cy.get('input[class="cb1-element"]').contains('Option 1').check({force:true})
        //cy.get('input[class="cb1-element"]').contains('Option 2').check({force:true})
        //cy.get('input[class="cb1-element"]').contains('Option 3').check({force:true})
        //cy.get('input[class="cb1-element"]').contains('Option 4').check({force:true})
        cy.get('#check1').should('have.value', 'Uncheck All');
        cy.get('#check1').click();
        cy.get('#check1').should('have.value', 'Check All');
    });
    it('verify Radio Buttons Demo', function () {
        cy.visit('https://www.seleniumeasy.com/test/');
        cy.get('#at-cv-lightbox-content a[href="#"]').click();
        cy.get('#navbar-brand-centered a[href="#"]').contains('Input Forms').click();
        cy.get('.dropdown-menu a[href="./basic-radiobutton-demo.html"]').click();
        cy.get('input[value="Male"][name="optradio"]').should('have.value', 'Male').click();
        cy.get('#buttoncheck').should('contain', 'Get Checked value').click();
        cy.get('p.radiobutton').should('contain', 'Radio button \'Male\' is checked');
        cy.get('input[value="Male"][name="gender"]').click();
        cy.get('input[value="5 - 15"]').click();
        cy.get('button[onclick="getValues();"]').should('contain', 'Get values').click();
        cy.get('p.groupradiobutton').should('contain', 'Sex : Male').and('contain', ' Age group: 5 - 15');
    });
});
