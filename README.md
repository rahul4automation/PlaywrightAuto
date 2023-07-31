# PlaywrightAuto
SetUp Playwright :

first create folder 
then do npm init
npm install playwright
npm install @cucumber/cucumber


To run the Test Cases
npx playwright test --grep Rahul

npx playwright test --config=playwright.config.ts --project=WebKit

Html Report 
npx playwright test --config=playwright.config.ts --project=Firefox --reporter=html

 npx playwright show-report
