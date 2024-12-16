module.exports = {
  chromeWebSecurity: false, // Desactiva seguridad en Chrome 
  video: true,
  e2e: {
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      
    },
  },
};
