const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  //Time, in milliseconds, to wait until most DOM based commands are considered timed out.
  pageLoadTimeout: 70000,
  //Time, in milliseconds, to wait for page transition events or cy.visit(), cy.go(), cy.reload() commands to fire their page load events. Network requests are limited by the underlying operating system, and may still time out if this value is increased
  
  viewportWidth: 414,
  viewportHeight: 896,
  e2e: 
  {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false  
  },
});
