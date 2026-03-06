// import { test, expect } from '@playwright/test';
// import { LoginPage } from "../pages/loginpage.po";
// import data from "../testdata/login.json";

// test.describe('verify login', () => {
//     let login
//     test.beforeEach(async ({ page }) => {
//         login = new LoginPage(page)
//         await login.launchUrl()
//         await login.verifyLogo()

//     })
//     test('verify login with valid creds', async () => {
//         await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
//         await login.loginSuccess()
//     })

//     test('verify login with validusername & invalidPassword', async () => {
//         await login.loginwithCreds(process.env.APP_USERNAME, data.invalidPassword)
//         await login.loginFailure()
//     })
//     test('verify login with invalidusername & validPassword', async () => {
//         await login.loginwithCreds(data.invalidUsername, process.env.APP_PASSWORD)
//         await login.loginFailure()
//     })
//     test('verify login with invalidusername & invalidPassword', async () => {
//         await login.loginwithCreds(data.invalidUsername, data.invalidPassword)
//         await login.loginFailure()
//     })


// })

import { test, expect } from '@playwright/test';
import { loginPage } from "..//pages/loginpage.po"
import data from "../testdata/login.json"

test.describe("Verify Login", () => {

    let login

    test.beforeEach( async ({page}) =>{
        
        login = new loginPage(page)
        await login.launchUrl()
        await login.verifyLogo()

    })

    test("verify login with valid creds", async () => {
         await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
         await login.loginSuccess()
    })

    test("verify login invlid user and valid password", async () => {

         await login.loginwithCreds(data.invalidUsername, process.env.APP_PASSWORD)
         await login.loginfailure()
    })

    test("verify login valid user and invalid password", async () => {

         await login.loginwithCreds(process.env.APP_USERNAME, data.invalidPassword)
         await login.loginfailure()
    })

    test("verify login invalid user and invalid password", async () => {
         await login.loginwithCreds(data.invalidUsername, data.invalidPassword)
         await login.loginfailure()
    })
})