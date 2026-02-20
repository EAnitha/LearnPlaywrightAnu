import { test, expect } from '@playwright/test';

test('display dynamic item in dashboard', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/disappearing_elements")

    if (await page.locator('//a[text() = "Gallery"]').isVisible()) {
        await expect(page.locator('//a[text() = "Gallery"]')).toBeVisible()

        console.log("Gallery is visible")
    }

    else {
        await expect(page.locator('//a[text()= "Portfolio"]')).toBeVisible()
        console.log("portfolio is visible")
    }



});