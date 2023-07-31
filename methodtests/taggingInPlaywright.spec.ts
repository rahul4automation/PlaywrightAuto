import {test, expect} from '@playwright/test'



test.describe('Regression suite ' ,() => {
test('simple playwright test @Rahul' ,async({page}) =>
{
   await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
   await page.locator("//a[contains(text(),'Follow Twitter & Facebook')]").click();
   await page.waitForTimeout(10000);



});


test('clicking on element  @Rahul' ,async({page}) =>
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


test('Checking how to enter in input text field   @Test', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/');
    await page.waitForTimeout(1000);
    let SignInButton = await page.locator("//button[@id='signin_button']").textContent();
    await expect(SignInButton).toContain('Signin');
    await page.locator("//button[@id='signin_button']").click();
    await page.waitForTimeout(2000);
    //console.log("SigIn page title is :",await page.title());
    await expect(await page.title()).toBe('Zero - Log in');

    //Enter Value in Username and password 

    await page.locator("//input[@type='text']").fill("Rahulece");
    
    await page.type("//input[@type='password']","Admin@123");

    //await page.locator("//input[@type='password']").type("Admin@123");

    //How to Check and Uncheck to the checkbox 
    await page.locator("//input[@type='checkbox']").check();

    await page.waitForTimeout(2000);

    await page.locator("//input[@type='checkbox']").uncheck();

    await page.locator("//input[@type='submit']").click();

    //Validate alert message 

    const AlrertErrorMessage = await page.locator("//div[@class='alert alert-error']").textContent();
    await expect(AlrertErrorMessage).toContain('Login and/or password are wrong.');

});


test('Checking Assertion using playwright  @Test', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/');
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL('http://zero.webappsecurity.com/');
    await page.waitForTimeout(2000);

    // Verify assertion when element is not in the current page 
    const element = await page.locator('h6');

    await expect(element).not.toBeVisible();
    await expect(element).toHaveCount(0);})

});