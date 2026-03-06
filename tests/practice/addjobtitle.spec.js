import { test, expect } from '@playwright/test';
//import { faker } from '@faker-js/faker';
const jobTitles = {
  jobTitle1: "SDE",
  jobTitle2: "QA",
  jobTitle3: "BA"

}
for(let jobTitle in jobTitles){
test(`Verify admin can add job title: ${jobTitle}`, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  //let randomchar = (Math.random() + 1).toString(36).substring(7); //5 char generation

  await page.getByRole('textbox').nth(1).fill(jobTitles[jobTitle]); // using faker json
  // await page.waitForTimeout(4000)
  // await page.getByRole('textbox', { name: 'Type description here' }).click();
  // await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation Tester');
  // await page.getByRole('textbox', { name: 'Add note' }).click();
  // await page.getByRole('textbox', { name: 'Add note' }).fill('Notes');
   await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible({timeout: 30000});
});
}