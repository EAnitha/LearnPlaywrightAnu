import { test, expect } from '@playwright/test';
import { loginPage } from "..//pages/loginpage.po"
import { addEmployeePage } from "..//pages/addemployeepage.po"
import { logoutPage } from "..//pages/logoutpage.po"
import data from "../testdata/PIM/addemployee.json"

let login
let addemp
let logout
test.beforeEach(async ({ page }) => {
    login = new loginPage(page)
    addemp = new addEmployeePage(page)
    logout = new logoutPage(page)
    await login.launchUrl()
    await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)


})

test("verify user can create employee", async () => {
    await addemp.navigateToAddEmployee()
    test.slow()
    let randomchars = (Math.random() + 1).toString(36).substring(7);
    await addemp.addEmployee(data.firstname, data.lastname, randomchars, 'testdata/people-2574170_1280.jpg')
    await addemp.verifyEmployeeCreated()

});

test("verify employee is visible in employee list", async () => {

    await logout.navigateToEmployeeList()

    let employeeName = data.firstname + " " + data.lastname

    await logout.searchEmployee(employeeName)

    await logout.verifyEmployeePresent(employeeName)

})
test('verify personal details ', async () => {

    await addemp.navigateToAddEmployee()
    test.slow()
    let randomchars = (Math.random() + 1).toString(36).substring(7);
    await addemp.addEmployee(data.firstname, data.lastname, randomchars, 'testdata/people-2574170_1280.jpg')
    await addemp.verifyEmployeeCreated()

})
test('verify user can edit middle name', async () => {
    test.slow()
    await logout.editEmployee("gjhjhj")
    await logout.verifyEmpMName()
});

test('verify user can delete employee', async()=> {
    await logout.deleteEmployee()
})
test('user able to logout', async () => {
    await logout.logout();
 });

