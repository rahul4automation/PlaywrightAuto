import { test, expect } from '@playwright/test'

test.skip('handle frame using playwright and interact with frame ', async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    await page.waitForTimeout(2000);
    const pageTitle=await page.title();
    console.log("Page Title is :", pageTitle)

    await expect(pageTitle).toContain('LetCode with Koushik');
    const allframes = page.frames();
    console.log("no of frame on page :" + allframes.length);



   // Handle first frame and enter text 
    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Rahul");
    await frame.locator("input[name='lname']").fill("Kumar");
    await page.waitForTimeout(4000);


    //Handle frame inside frame [INNERFRAME]
    const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
    await innerFrame.locator("input[name='email']").fill("rahulece77@gmail.com");
    await frame.locator("input[name='fname']").clear();


    await frame.locator("input[name='fname']").fill("RahulKumar");


    const mailframename=frame.frameLocator("//iframe[@src='innerFrame']");
    await mailframename.locator("//input[@class='input']").clear();
    await mailframename.locator("//input[@class='input']").fill("rahulsing77@gmail.com");
    await page.waitForTimeout(4000);

});
