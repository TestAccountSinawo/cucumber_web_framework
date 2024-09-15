import { setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../test/utils/pageFixture";
import { expect } from "@playwright/test";

export default class SearchSportArticlesPage {

    private Elements = {
        searchBox_loc: "//span[text()='Search BBC']",
        searchInputField_loc: "//input[@id='searchInput']",
        searchList_loc: "//*[@id='suggestions']/li/a/div"
    }

    async navigateToSportUrlPath() {
        console.log("Navigate URL::")
        await pageFixture.page.goto('https://www.bbc.com/sport');
    }

    async clickSearchBox() {
        console.log("Click The searchbox::")
        await pageFixture.page.locator(this.Elements.searchBox_loc).isVisible();
        pageFixture.page.locator(this.Elements.searchBox_loc).click();
    }

    async inputSearchPhrase(searcPhrase: string) {
        console.log("Enter the search phrase::")
        await pageFixture.page.locator(this.Elements.searchInputField_loc).isEditable();
        await pageFixture.page.locator(this.Elements.searchInputField_loc).click();
        pageFixture.page.keyboard.type(searcPhrase, {delay:150});
        await pageFixture.page.waitForTimeout(3000);
    }

    async checkReturnedResults() {
        console.log("Confirm returned results::")
        await pageFixture.page.waitForSelector(this.Elements.searchList_loc);
        const searchResults = await pageFixture.page.$$(this.Elements.searchList_loc);


        for(let option of searchResults){
            const suggestedValue = await option.textContent();
            console.log("Value from the Autosuggested articles: ", await suggestedValue);
        }
        await pageFixture.page.waitForTimeout(3000);
    }

}