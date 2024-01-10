const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    baseUrl: 'https://auxiliumelit.com/',
    excludeSpecPattern: ['**/cypress-default-tests'],
    specPattern: 'cypress/e2e/**/*.{js,jsx}',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
