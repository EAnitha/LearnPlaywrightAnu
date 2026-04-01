import { test, expect } from '@playwright/test';

// test('Display points table', async ({ page }) => {
//     await page.goto("https://www.iplt20.com/stats/2026")
//     await page.locator('(//a[text()="MORE"])[2]').hover()
//     await page.locator("(//div[text()='SEASON 2026 '])[1]").click()
//     const table = page.locator('//table[@class="st-table statsTable ng-scope"]');
//     const rows = await table.locator('tr').all();
//     for (const row of rows) {
//         const cells = await row.locator('td, th').allTextContents();
//         console.log(cells.join('\t'));
//     }


// })


// import { test, expect } from '@playwright/test';

test('Display points table', async ({ page }) => {
    await page.goto("https://www.iplt20.com/stats/2026")
    await page.locator('(//a[text()="MORE"])[2]').hover()
    await page.locator("(//div[text()='SEASON 2026 '])[1]").click()
    const table = page.locator('//table[@class="st-table statsTable ng-scope"]');
    const allRows = await table.locator('tr').all();
    const headers = await allRows[0].locator('td, th').allTextContents();
    const data = [];
    for (let i = 1; i < allRows.length; i++) {
        const cells = await allRows[i].locator('td, th').allTextContents();
        const rowObj = {};
        headers.forEach((h, idx) => rowObj[h] = cells[idx] || '');
        data.push(rowObj);
    }
    console.table(data)


})