import { chromium, Page, Browser, BrowserContext } from '@playwright/test'
import { BeforeAll, AfterAll, After, Status } from '@cucumber/cucumber';
import { pageFixture } from './pageFixture';

let browser: Browser;
let page: Page;
let context: BrowserContext;

BeforeAll(async function () {

    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    pageFixture.page = await page;
})

AfterAll(async function () {
    await pageFixture.page.close();
    await context.close();
    await browser.close();
})

After(async function ({ pickle, result }) {

    if (await result?.status == await Status.FAILED) {
        const images = await pageFixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: 'png' });
        await this.attach(images, "image/png");
    }
})