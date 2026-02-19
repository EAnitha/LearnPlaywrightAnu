import { test, expect } from '@playwright/test';

test('Add products and verify total price', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Add first two products
    await page.locator("(//div[@class='product-action']/button)[1]").click();
    await page.locator("(//div[@class='product-action']/button)[2]").click();

    // Get prices of first two products
    const price1Text = await page.locator("(//p[@class='product-price'])[1]").textContent();
    const price2Text = await page.locator("(//p[@class='product-price'])[2]").textContent();

    const price1 = parseFloat(price1Text);
    const price2 = parseFloat(price2Text);

    const expectedTotal = price1 + price2;

    // Open cart
    await page.locator(".cart-icon").click();
    await page.locator("text=PROCEED TO CHECKOUT").click();

    // Get total amount from checkout page
    const totalText = await page.locator(".totAmt").textContent();
    const actualTotal = parseFloat(totalText);

    // Assertion
    await expect(actualTotal).toBe(expectedTotal);
});
