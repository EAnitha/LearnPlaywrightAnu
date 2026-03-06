
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