import { expect } from '@playwright/test';

export class addEmployeePage{
    constructor (page) {
        this.page = page
        this.PIMLink = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
        this.addEmpLink = page.locator('//a[text()="Add Employee"]')
        this.firstName = page.locator('//input[@name="firstName"]')
        this.lastName = page.locator('//input[@name="lastName"]')
        this.empId = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.profilePic = page.locator('//input[@type="file"]')
        this.saveBtn = page.locator('//button[@type="submit"]')
        this.personalDetails = page.getByRole('heading', { name: 'Personal Details' });

        this.firstnameErrorMsg = page.locator("(//span[text()='Required'])[1]")
        this.lastnameErrorMsg = page.locator("(//span[text()='Required'])[2]")
    
    }
    async navigateToAddEmployee(){
        await this.PIMLink.click();
        await this.addEmpLink.click();
    }
    async addEmployee(firstname, lastname, empid, profilepic){
        await this.firstName.fill(firstname)
        await this.lastName.fill(lastname)
        await this.empId.fill(empid)
        await this.profilePic.setInputFiles(profilepic)
        await this.saveBtn.click()
    }
    async clickOnSave(){

        await this.saveBtn.click()
    }
    async verifyErrorMessages(){

       await expect(this.firstnameErrorMsg).toBeVisible()
       await expect(this.lastnameErrorMsg).toBeVisible()
    }

    async verifyEmployeeCreated(){
        await expect(this.personalDetails).toBeVisible({timeout: 55000});
    }
 
    

}
