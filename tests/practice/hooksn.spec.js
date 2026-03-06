import { test, expect } from '@playwright/test';
// const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
//     const empId = `EMP-${randomStr}`;
//let randomchar 
test.beforeEach(async ({ page }) => {
 //randomchar = (Math.random() + 1).toString(36).substring(7);


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
    await page.locator('//span[text()="PIM"]').click()
    await page.locator('//a[text()="Add Employee"]').click()
    await page.locator('//input[@name="firstName"]').fill("Anu")
    await page.locator('//input[@name="lastName"]').fill("Employee")
    //await page.locator('//input[@name="employeeId"]').fill(randomchar)

    console.log("before each hook executed")


})
test.afterEach(async ({ page }) => {
    //  await page.locator('//button[@type="submit"]').click()

    //  await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()
    console.log("after each hook executed")

})
test('Verify PNG file upload', async ({ page }) => {

    await page.locator('//input[@type="file"]').setInputFiles('testdata/male-teacher.png')
})
test('Verify JPG file upload', async ({ page }) => {

    await page.locator('//input[@type="file"]').setInputFiles('testdata/pexels-optical-chemist-340351297-31780340 (1).jpg')
})

test('Verify GIF file upload', async ({ page }) => {

    await page.locator('//input[@type="file"]').setInputFiles('testdata/dailyfina-lunar-17720_512.gif')
})
