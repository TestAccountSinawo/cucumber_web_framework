# cucumber_web_framework
**Introduction**

This is a web-based test Playwright framework written in TypeScript language.

**Prerequisite:**
**_Install the following:_**
_1) __VSCode IDE,__ 
_2) _NodeJS installed.___

**How to execute the project?**
At this stage, I believe most test engineers know how to clone a repo (execute this command to clone the repo, _git clone git@github.com:TestAccountSinawo/cucumber_web_framework.git_). Once the project has been cloned, open it via VSCode by going to the **File**,  **open folder**, navigate to the root folder of the project, and click **open**.

Just to let you know, this project is running in a headless mode, and if you want to run this project in GUI mode, you can navigate to src/test/utils/hooks.ts and remove the Not Function when launching the Chromium browser launch({ headless: false });}**
<img width="1347" alt="image" src="https://github.com/user-attachments/assets/9e561612-9bc3-4dec-b4a0-827983929e40">

This _hooks.ts_ file is where we start the browser take screenshots if there is a fail, and close the browser once all the tests have been executed. Under the src folder, I have the pageObjects where the browser actions and elements(locators) are located. In this folder, we define the actions of the actual tests and do some assertions to validate certain pages or action steps.

The features folder contains the features where scenarios are defined. 

To execute the tests go to the project Terminal and type "npm install" and then "npm run test" to run the tests. Once the tests are finished, the report gets created under "test-results". I have configured Cucumber to use multi-reports, where graphs/charts are created for more clarity, especially for management personnel. Inside the  test-results folder there will be the default report named cucumber-report.html, this is the lighter report of the test runs. There will be a multi-report I have configured which uses cucumber.json to create a graphical representation of the test runs and the report is named "index.html".

**GitHub Actions:**

The framework is built to also use GitHub Actions. I have added  a dir called .github/workflows/ and inside that path we have a .yml file that installs the required libs to run via cloud. You can track these GitHub actions under actions from the GitHub site, which are triggered when a local push is pushed to the repo.

These GitHub actions come quite handy if you do not have your machine at the time and you can just execute the action from your phone and get the results. You can also download the run from these actions and check the report from the path of the index.html or cucumber-report.html depending on your choice.

#Author: Mr. S. Qhaji
