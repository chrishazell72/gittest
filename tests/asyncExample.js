module.exports = {
  "Asynchronous example": function(browser) {
    browser.url(
      "file:///C:/Users/chris.hazell/Documents/AmazeRealise/Testing/Automation/asyncExample.html"
    );
    for (var i = 1; i <= 10; i++) {
      browser.click("#add").waitForElementVisible(".item" + i, 10000);/*browser.click("#add").expect.element(".item" + i).to.be.visible; */
    }
    browser.end();
  }
};