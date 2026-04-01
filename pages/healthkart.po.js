import { expect } from '@playwright/test';

export class HealthkartPage {
    constructor(page) {
        this.page = page;

        this.searchInput = page.locator('#searchInput');
        this.headerLogo = page.locator('a[href="/"]');
        this.productName = page.locator(`//div[text()='Whey Proteins']`);
        this.addToCartBtn = page.locator("(//button[@type='button'])[2]");
        this.loginBtn = page.locator("//button[text()='Login']");
        this.phoneNumberInput = page.locator('#phoneInput');
        this.cartItemNum = page.locator('[data-role="cart-counter"]');
        this.menuItems = page.locator("//li[contains(@class,'list-level1-item')]")
        this.mouseitem = page.locator('(//a[@class="top-menu-link"])[1]')
        this.mouseItem1 = page.locator("//a[text()='Health Nutrition']")
    }

    async navigateToHealthkart() {
        await this.page.goto('https://www.healthkart.com/');
    }

    async verifyHeaderLogo() {
        await expect(this.headerLogo).toBeVisible()
    }

    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchInput.press('Enter');
        await expect(this.productName).toBeVisible()
    }

    async login(phoneNumber) {
        await this.loginBtn.click();
        await this.phoneNumberInput.fill(phoneNumber);
        // OTP step normally required
    }

    async addToCart() {
        await this.addToCartBtn.first().click();
        await expect(this.cartItemNum).toBeVisible();
    }

    async displayMenuItems() {
        const count = await this.menuItems.count({ force: true });
        console.log(`Menu items count: ${count}`);
        await expect(count).toBeGreaterThan(0);
    }
    async mouseActions() {

        await this.mouseitem.hover()
        await expect(this.mouseitem).toBeVisible()
        await this.mouseItem1.hover()
        
    }
}
