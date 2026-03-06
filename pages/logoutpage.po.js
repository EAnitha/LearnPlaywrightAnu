// import { expect } from '@playwright/test';

// export class logoutPage {
//     constructor(page) {
//         this.page = page
//         this.userProfile = page.locator(".oxd-userdropdown-name")
//         this.logourBtn = page.locator("//a[text()='Logout']")
//         this.PIMLink = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
//         this.empListLink = page.locator('//a[text()="Employee List"]')
//         this.employeeNameField = page.locator("(//input[@placeholder='Type for hints...'])[1]")
//         this.searchBtn = page.locator("//button[normalize-space()='Search']")

//         this.employeeTable = page.locator(".oxd-table-body")
//         this.middleName = page.locator('//input[@name="middleName"]')
//         this.saveBtnn = page.locator('(//button[@type="submit"])[1]')



//     }
//     async logout() {
//         await this.userProfile.click()
//         await this.logourBtn.click()
//         await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     }
//     async navigateToEmployeeList() {
//         await this.PIMLink.click()
//         await this.empListLink.click()
//     }
//     async searchEmployee(employeeName) {

//         await this.employeeNameField.fill(employeeName)

//         await this.searchBtn.click()

//     }
//     async verifyEmployeePresent(employeeName) {

//         await this.page.waitForTimeout(2000)

//         await expect(this.employeeTable).toContainText(employeeName)

//     }

//     async editEmployee(employeeId, newMiddleName) {
//         // Click Edit button for the employee
//         const editBtn = this.page.locator(`i[data-employee-id="${employeeId}"]`);
//         await editBtn.click();

//         // Wait for middle name input
//         await expect(this.middleNameInput).toBeVisible({ timeout: 5000 });

//         // Update middle name
//         await this.middleNameInput.fill(newMiddleName);

//         // Save
//         await this.saveBtn.click();

//         // Verify middle name updated
//         await expect(this.middleNameInput).toHaveValue(newMiddleName);
//     }
// }

import { expect } from '@playwright/test';

export class logoutPage {
    constructor(page) {
        this.page = page

        this.userProfile = page.locator(".oxd-userdropdown-name")
        this.logourBtn = page.locator("//a[text()='Logout']")

        this.PIMLink = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
        this.empListLink = page.locator('//a[text()="Employee List"]')

        this.employeeNameField = page.locator("(//input[@placeholder='Type for hints...'])[1]")
        this.searchBtn = page.locator("//button[normalize-space()='Search']")
        this.employeeTable = page.locator(".oxd-table-body")
        this.editBtn = page.locator('(//i[@class="oxd-icon bi-pencil-fill"])[3]')
        this.middleName = page.locator('//input[@name="middleName"]')
        this.saveBtn = page.locator('(//button[@type="submit"])[1]')
    }

    async logout() {
        await this.userProfile.click()
        await this.logourBtn.click()
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async navigateToEmployeeList() {
        await this.PIMLink.click()
        await this.empListLink.click()
    }

    async searchEmployee(employeeName) {
        await this.employeeNameField.fill(employeeName)
        await this.searchBtn.click()
    }

    async verifyEmployeePresent(employeeName) {
        await expect(this.employeeTable).toContainText(employeeName)
    }

    async editEmployee(middlename) {
        await this.PIMLink.click()

        await this.editBtn.click()
        await this.middleName.fill(middlename)
        await this.saveBtn.click()
        await expect(this.middleName).toBeVisible()


    }
    async verifyEmpMName(){
        await expect(this.middleName).toBeVisible()
    }
}