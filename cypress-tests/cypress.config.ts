import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://josephyap9.wixsite.com/qaetestsite',
    numTestsKeptInMemory: 5,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    retries: { 'runMode': 0, 'openMode': 0 },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 15000,
    requestTimeout: 10000,
    viewportHeight: 1500,
    viewportWidth: 1300
  },
});
