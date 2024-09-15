import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, test } from '@playwright/test'
import { pageFixture } from '../utils/pageFixture';
import LasVegasGPResultsPage from '../../pageObjects/lasVegasGPResultsPage';

let browser: Browser;
let context: BrowserContext;
const lvGrandPrixPage = new LasVegasGPResultsPage();

Given('User navigates to the valid url', async function () {
    await lvGrandPrixPage.navigateToSportUrl();
});

When('A user navigates to Formular1 Results', async function () {
    await lvGrandPrixPage.navigateToFormula1Screen();

});

When('User selects the year 2023', async function () {
    await lvGrandPrixPage.navigateToResultsScreen();
});

Then('User checks the Las Vegas Grand Prix', async function () {
    await lvGrandPrixPage.checkTheResultsLeaderBoard();
});

