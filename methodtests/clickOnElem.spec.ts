import{test ,expect} from  '@playwright/test'

test('clicking on element ' ,async({page}) =>
{
     await page.goto('https://www.bestbuy.com/?intl=nosplash');
     await page.waitForTimeout(1000);

     //Click on Element 
     await page.locator("//a[contains(text(),'Best Buy Outlet')]").click();

     //click on Element using nth() function 
     const title  =await page.locator("//button[@type='button']").nth(1).textContent();
     await page.waitForTimeout(1000);
     console.log("Button Title is :",title);
     

});