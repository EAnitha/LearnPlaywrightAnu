// @ts-check
const { test, expect } = require('@playwright/test');

// Utility function to generate random employee ID
function generateRandomEmployeeId() {
  return Math.floor(Math.random() * 100000).toString();
}

test.beforeEach(async ({ page }) => {
  // Login
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('//input[@name="username"]').fill("Admin");
  await page.locator('//input[@name="password"]').fill("admin123");
  await page.locator('//button[@type="submit"]').click();

  // Verify dashboard
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

  // Navigate to Add Employee
  await page.locator('//span[text()="PIM"]').click();
  await page.locator('//a[text()="Add Employee"]').click();

  // Fill employee details with random ID
  await page.locator('//input[@name="firstName"]').fill("Anu");
  await page.locator('//input[@name="lastName"]').fill("E");

  const randomId = generateRandomEmployeeId();
  await page.locator('//label[text()="Employee Id"]/../following-sibling::div/input').fill(randomId);

  console.log(`beforeEach hook executed - Employee ID: ${randomId}`);
});

test.afterEach(async ({ page }) => {
  // Verify dashboard is still accessible
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  console.log("afterEach hook executed");
});

test('Verify PNG file upload', async ({ page }) => {
  await page.locator('//input[@type="file"]').setInputFiles('testdata/male-teacher.png');
  await expect(page.locator('//input[@type="file"]')).toBeVisible({force:true});
});

test('Verify JPG file upload', async ({ page }) => {
  await page.locator('//input[@type="file"]').setInputFiles('testdata/pexels-optical-chemist-340351297-31780340 (1).jpg');
  await expect(page.locator('//input[@type="file"]')).toBeVisible({force: true});
});

test('Verify GIF file upload', async ({ page }) => {
  await page.locator('//input[@type="file"]').setInputFiles('testdata/dailyfina-lunar-17720_512.gif');
  await expect(page.locator('//input[@type="file"]')).toBeVisible({force: true});
});
