export class LoginPage{
    loginByUserName(userName,password){
        cy.get('[name="email"]').type(userName)
        cy.get('[name="password"]').type(password)
        cy.get('[type="submit"]').click()
    }
}
export const loginPage = new LoginPage()