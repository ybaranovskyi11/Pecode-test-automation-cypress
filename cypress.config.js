const { defineConfig } = require("cypress");

module.exports = defineConfig({
  scrollBehavior: "bottom",
  video: true,
  // numTestsKeptInMemory: 0,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    }
  }
});
