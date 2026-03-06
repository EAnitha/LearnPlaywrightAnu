import { test, expect } from '@playwright/test';
import { loginPage } from "..//pages/loginpage.po"
import { addEmployeePage} from "..//pages/addemployeepage.po"

import data from "../testdata/PIM/addemployee.json"
let login
let addemp

test.beforeEach( async ({page}) =>{

        login = new loginPage(page)
        addemp = new addEmployeePage(page)
        await login.launchUrl()
        await login.verifyLogo()
        await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
        await addemp.navigateToAddEmployee()

    })
    test("verify User can create Employee", async () => {
       

        test.slow()
        let randomchars = (Math.random() + 1).toString(36).substring(7);
        await addemp.addEmployee(data.firstname, data.lastname, randomchars, 'testdata/people-2574170_1280.jpg')
        await addemp.verifyEmployeeCreated()
    })

test("verify error Message for Mandatory fields", async () => {
       
        await addemp.clickOnSave()
        await addemp.verifyErrorMessages()

    })
    