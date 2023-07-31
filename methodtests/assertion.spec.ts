import { test, expect } from '@playwright/test'

test('Checking Assertion using playwright ', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/');
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL('http://zero.webappsecurity.com/');
    await page.waitForTimeout(2000);


    //Different type of Assertion in playwright
    await expect(page).toHaveTitle('Zero - Personal Banking - Loans - Credit Cards');


    await expect(await page.title()).toBe('Zero - Personal Banking - Loans - Credit Cards');

    const MoreServices = await page.locator("//a[@id='online-banking']");


    await expect(MoreServices).toBeVisible();

    await expect(MoreServices).toHaveText("More Services")

    await expect(MoreServices).toHaveCount(1);

    // Verify assertion when element is not in the current page 
    const element = await page.locator('h6');

    await expect(element).not.toBeVisible();
    await expect(element).toHaveCount(0);


});