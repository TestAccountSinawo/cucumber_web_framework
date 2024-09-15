import { Given, When, Then } from '@cucumber/cucumber';
import SearchSportArticlesPage from '../../pageObjects/searchSportArticlesPage';

const searchPage = new SearchSportArticlesPage();

Given('BBC url provided for sport articles', async function () {
    console.log("Given:::::::::");
    await searchPage.navigateToSportUrlPath();
});

When('A report searches sport articles using a searchPhrase as {string}', async function (searchPhrase) {
    console.log("When:::::::::");
    await searchPage.clickSearchBox();

    await searchPage.inputSearchPhrase(searchPhrase);
});
Then('Verify the returned search results', async function () {
    console.log("Then:::::::::");
    await searchPage.checkReturnedResults()
});