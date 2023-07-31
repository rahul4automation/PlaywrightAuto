import {test, expect} from '@playwright/test'

test('handle multiple window using playwright ' ,async({page}) =>
{
   await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

   //await page.locator("//a[contains(text(),'Follow Twitter & Facebook')]").click();  
   await page.waitForTimeout(10000);
   const [multiPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("//a[contains(text(),'Follow Twitter & Facebook')]")
])
await multiPage.waitForLoadState();

const pages = multiPage.context().pages();
console.log('No.of tabs: ' + pages.length);
await page.waitForTimeout(5000);

pages.forEach(tab => {
    console.log(tab.url());
})

let facebookPage;
for (let index = 0; index < pages.length; index++) {
    const url = pages[index].url()
    if (url == "https://www.facebook.com/lambdatest/") {
        facebookPage = pages[index];
    }
}
await page.waitForTimeout(5000);
const text = await facebookPage.textContent("//h1")
console.log(text);
});
