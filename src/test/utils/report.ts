const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/",
  displayDuration: true,
  reportName: "BDD Playwright Automation Report",
  metadata: {
    browser: {
      name: "chrome",
      version: "128",
    },
    device: "MacBook Air",
    platform: {
      name: "iOS",
      version: "14.6.1",
    },
  },
  customData: {
    title: "Execution info",
    data: [
      { label: "Project", value: "SecuritEase-Assessment" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "2024-Sept" }
    ],
  },
});