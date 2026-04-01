import { test } from '@playwright/test';
import { HealthkartPage } from '../pages/healthkart.po';

test.describe('HealthKart Page Tests', () => {
    let hltkrtPage;

    test.beforeEach(async ({ page }) => {
        hltkrtPage = new HealthkartPage(page);
        await hltkrtPage.navigateToHealthkart();
    });

    test('should display the HealthKart logo', async () => {
        await hltkrtPage.verifyHeaderLogo();
    });

    test('should search for a product', async () => {
        await hltkrtPage.searchProduct("Whey Proteins");
    });

    test('should login with phone number', async () => {
        await hltkrtPage.login('8618341550');
    });

    test('should add a product to the cart', async () => {
        await hltkrtPage.addToCart();
    });

    test('should display menu items', async () => {
        await hltkrtPage.displayMenuItems();
    });

    test('user can able to mousehover on bestsellers', async() => {
        await hltkrtPage.mouseActions()
    })
});