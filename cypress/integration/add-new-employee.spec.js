///<reference types="cypress"/>

import {loginPage} from "../support/page_objects/pages/loginPage"
import {homePage} from "../support/page_objects/pages/homePage"

describe('add employee',()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it('verify adding new employee',()=>{
        loginPage.loginByUserName("aliaa+qahrmanager@workmotion.com","Test1234")
        homePage.openCreateEmpolyee() 
        homePage.selectCountry("Egypt")
    })
})