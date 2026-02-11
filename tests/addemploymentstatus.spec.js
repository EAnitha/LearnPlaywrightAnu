import { test, expect } from '@playwright/test';

test('verify admin can create employment status', async ({ page }) => {

    // launch url goto
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // enter user name
    await page.locator("input[name='username']").fill("Admin")
    // enter password
    await page.locator("input[name='password']").fill("admin123")
    // click on login
    await page.locator("button[type='submit']").click()
    // verify url 
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
// admin click
await page.locator("//span[text()='Admin']").click()
// click on job
await page.locator("//span[normalize-space(text())='Job']").click()
// click on employment status
await page.locator("//a[normalize-space(text())='Employment Status']").click()
// click on add
await page.locator("i.oxd-icon.bi-plus.oxd-button-icon").click()
// enter employment status
  let randomchar = (Math.random() + 1).toString(36).substring(7); //5 char generation

await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("FTE" + randomchar)
// click on save
await page.locator("button[type='submit']").click()
// verify url
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus")
})