const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// const mysql = require('cypress-mysql');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  return config;
}
module.exports = defineConfig({
  projectId: "sjkm3m",

  e2e: {
    setupNodeEvents(on, config) {
    },
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    experimentalStudio: true,
    specPattern: "**/*.feature", // setup cucumber feature
    setupNodeEvents,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: false
    // setupNodeEvents(on, config) {

    //   mysql.configurePlugin(on);

    // },

    // "env": {

    //   "db": {

    //     "host": "sql12.freemysqlhosting.net",

    //     "user": "sql12716277",

    //     "password": "Qn8xs3F9Bx",

    //     "database": "sql12716277"

    //   }
    // },
  }
});



