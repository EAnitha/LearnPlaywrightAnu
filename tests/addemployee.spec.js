import { test, expect } from '@playwright/test';
import logindata from "../testdata/login.json"
//import addempdata from "../testdata/PIM/addemployee.json" // json data import
//import { faker } from '@faker-js/faker';
//import ExcelJS from 'exceljs'; // from excel data import

const employees = { // data driven testing using json
  emp1: { firstName: "Anitha", lastName: "E" },
  emp2: { firstName: "Anu", lastName: "M" },
  emp3: { firstName: "Ammu", lastName: "E" }
}
for (let emp in employees) {
  test(`verify admin can create employee with mandatory fields: ${emp}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    // using json data for data generation
    // await page.getByRole('textbox', { name: 'First Name' }).fill(addempdata.firstname);
    // await page.getByRole('textbox', { name: 'Last Name' }).click();
    // await page.getByRole('textbox', { name: 'Last Name' }).fill(addempdata.lastname);

    // using faker json for data generation
    // await page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName());
    // await page.getByRole('textbox', { name: 'Last Name' }).click();
    // await page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName());

    // own random data generation
    // let randomchar = (Math.random() + 1).toString(36).substring(7); //5 char generation
    // await page.getByRole('textbox', { name: 'First Name' }).fill("Anu" + randomchar);
    // await page.getByRole('textbox', { name: 'Last Name' }).click();
    // await page.getByRole('textbox', { name: 'Last Name' }).fill("E" + randomchar);


    // using excel data
    //   const workbook = new ExcelJS.Workbook();
    //   await workbook.xlsx.readFile('./testdata/addemp.xlsx');

    //   const worksheet = workbook.getWorksheet('Sheet1'); // or workbook.worksheets[0]

    //   // Get header row
    //   const headerRow = worksheet.getRow(1);

    //   // Get data row (row 2)
    //   const dataRow = worksheet.getRow(2);

    //   const firstName = dataRow.getCell(1).value?.toString();
    //   const lastName = dataRow.getCell(2).value?.toString();

    //   console.log(firstName); // Anitha
    //   console.log(lastName); // E


    // // excel data usage
    //   await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    //   await page.getByRole('textbox', { name: 'Last Name' }).click();
    //   await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);

    await page.getByRole('textbox', { name: 'First Name' }).fill(employees[emp].firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill(employees[emp].lastName);

    await page.waitForTimeout(4000)
    await page.getByRole('button', { name: 'Save' }).click();

    // Wait until URL contains viewPersonalDetails
    await expect(page).toHaveURL(/viewPersonalDetails/);

    // Validate heading
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  });
} // End of for loop