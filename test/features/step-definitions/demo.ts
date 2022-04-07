import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(1000);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> searchItem: ${searchItem}`);
  let ele = await $(`input[name='q']`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>>> expected URL: ${expectedURL}`);
  let currentUrl = await browser.getUrl();
  chai.expect(currentUrl).to.equal(expectedURL);
});

/** 
 Web Interactions
*/
Given(/^A web page is opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 12000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform web interactions$/, async () => {
  /**
   * 1. Input box
   * Actions:
   * 1. Type into box
   * 2. Clear the field and type or just add value
   * 3. Click and type
   * 4. Slowly typing
   *
   */
  let number = 12345;
  let strNumber = number.toString();

  let element = await $(`input[type=number]`);
  await element.click();
  await element.scrollIntoView();

  // await element.addValue(strNumber); // just ADDS value to string without clearing previous content
  // await element.setValue(strNumber);
  // for (let char of strNumber) {
  //   await browser.keys(char)
  // }
  
  for (let index = 0; index < strNumber.length; index++) {
    await browser.pause(1000);

    let char = strNumber.charAt(index);
    await browser.keys(char);
  }
  await expect(element).toHaveValue(strNumber);
});
