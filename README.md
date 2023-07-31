# PlaywrightAuto
SetUp Playwright :

First create folder 
Then do npm init
npm install playwright
npm install @cucumber/cucumber


To run the Test Cases
npx playwright tes

For run the tag test cases use Test/Rahul
npx playwright test --grep Rahul

To run Test cases in WebKit 

npx playwright test --config=playwright.config.ts --project=WebKit

To run Test cases in Chromium 

npx playwright test --config=playwright.config.ts --project=Chromium


Html Report 
npx playwright test --config=playwright.config.ts --project=Firefox --reporter=html

 npx playwright show-report
