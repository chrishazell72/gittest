module.exports = {
  "Asynchronous example": function(browser) {
    browser.url(
      "http://www.google.com"
    );
	browser.click("#L2AGLb");
    browser.end();
  }
};