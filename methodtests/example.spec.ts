import {test, expect} from '@playwright/test'

test.skip('simple playwright test' ,async({page}) =>
{
   await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
   await page.locator("//a[contains(text(),'Follow Twitter & Facebook')]").click();
   await page.waitForTimeout(10000);



});
