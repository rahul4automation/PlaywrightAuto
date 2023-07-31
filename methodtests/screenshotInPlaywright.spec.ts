import { test, expect } from '@playwright/test'

test.skip('Checking how to capture screenshot for test Cases ', async ({ page }) => {
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

    await page.type("//input[@type='password']", "Admin@123");

    //await page.locator("//input[@type='password']").type("Admin@123");

    //How to Check and Uncheck to the checkbox 
    await page.locator("//input[@type='checkbox']").check();

    await page.waitForTimeout(2000);


    //Capture screenshot for Single element 

    const Checkboxbutton = await page.locator("//input[@type='checkbox']");
    await Checkboxbutton.screenshot({ path: 'CheckBoxElementScreenshot.png' })

    await page.locator("//input[@type='checkbox']").uncheck();

    await page.locator("//input[@type='submit']").click();

    //Validate alert message 

    const AlrertErrorMessage = await page.locator("//div[@class='alert alert-error']").textContent();
    await expect(AlrertErrorMessage).toContain('Login and/or password are wrong.');

    //To capture screenshot after all the event 

    await page.screenshot({ path: 'screenshot.png', fullPage: true });

});

test.only('Taking screenshot for single Element ', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/');
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL('http://zero.webappsecurity.com/');
    await page.waitForTimeout(2000);
   

    // Verify assertion when element is not in the current page 
    await page.locator("//strong[contains(text(),'Online Banking')]").click();


    const SigInOnlineBanking=await page.locator("//a[contains(text(),'Sign in')]");
    await SigInOnlineBanking.screenshot({ path: 'ScreenshotForOnlineBanking.png' })
    
});

