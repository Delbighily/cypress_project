const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    baseUrl:'https://magento.softwaretestingboard.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true
  },
});

