import { pageFixture } from "../test/utils/pageFixture";


export default class LasVegasGPResultsPage {

    private Elements = {
        formula1_loc: "//span[@class='ssrcss-1u47p8g-LinkTextContainer eis6szr1'][text()='Formula 1']",
        resultsLink_loc: "//span[text()='Results']",
        resultsYear_loc: "//div[text()='2023']",
        vegasGPLink_loc: "//span[text()='Las Vegas Grand Prix, Las Vegas Street Circuit'][1]",
        fullResultsLink_loc: "//*[@id='main-data']/div/div/div/section[2]/div/div/div[2]/div[2]//*[text()='Full race results']",
        lasVegasHeader_loc: "//h1[text()='2023 Las Vegas Grand Prix']",
    }

    async navigateToSportUrl() {
        await pageFixture.page.goto('https://www.bbc.com/sport');
    }

    async navigateToFormula1Screen() {
        console.log('Navigate to Formula1 page::')
        await pageFixture.page.locator(this.Elements.formula1_loc).isVisible();
        await pageFixture.page.locator(this.Elements.formula1_loc).click();
    }

    async navigateToResultsScreen() {
        console.log('Navigate to the 2023 results table::')
        await pageFixture.page.locator(this.Elements.resultsLink_loc).isVisible();
        await pageFixture.page.locator(this.Elements.resultsLink_loc).click();

        await pageFixture.page.locator(this.Elements.resultsYear_loc).isVisible();
        await pageFixture.page.locator(this.Elements.resultsYear_loc).click()
    }

    async checkTheResultsLeaderBoard() {

        console.log("Check the Las Vegas Grand Prix::");
        await pageFixture.page.mouse.wheel(0, 15);
        await pageFixture.page.locator(this.Elements.vegasGPLink_loc).isVisible();
        await pageFixture.page.locator(this.Elements.vegasGPLink_loc).click()

        await pageFixture.page.mouse.wheel(0, 50);
        //await pageFixture.page.waitForTimeout(3000);
        await pageFixture.page.locator(this.Elements.fullResultsLink_loc).isVisible();
        await pageFixture.page.locator(this.Elements.fullResultsLink_loc).click()

        await pageFixture.page.locator(this.Elements.lasVegasHeader_loc).isVisible();
        const vagasHeader = await pageFixture.page.locator(this.Elements.lasVegasHeader_loc).textContent()
        console.log('Page Header: ', await vagasHeader)

        pageFixture.page.mouse.move(0, 200);
        const table = await pageFixture.page.locator('//table[@aria-label="Race"]');
        const tableRows = await table.locator('tbody tr');

        for (let i = 0; i < 3; i++) {
            const innerRow = await tableRows.nth(i);
            const tableData = await innerRow.locator('td div');

            for (let x = 0; x < await tableData.count(); x++) {
                if (!await tableData.nth(x).textContent()) {
                    console.log(i+1 +" Race rankings for 2023: ", await tableData.nth(2).textContent());
                }
            }
        }
    }
}