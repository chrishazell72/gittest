module.exports = {
  "Asynchronous example": function(browser) {
    browser.url(
      "http://www.google.com"
    );
	browser.click("#L2AGLb");
/* this is a comment added for test purposes on git */
/* and another with additional change */
    browser.end();
  }
};