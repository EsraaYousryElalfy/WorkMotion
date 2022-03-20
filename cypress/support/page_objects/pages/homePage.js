export class HomePage{
    openCreateEmpolyee(){
        cy.contains('Add employee').click()
        cy.contains('CREATE NEW').click()
    }

    selectCountry(country){
        cy.contains('Select a country').type(country)
    }
}
export const homePage = new HomePage()