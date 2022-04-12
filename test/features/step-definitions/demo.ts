import { Given, When, Then } from "@wdio/cucumber-framework";
import path from "path";

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
  await browser.waitUntil(async function () {
    return (
      (await browser.getTitle()) ===
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    );
  }, {timeout: 20000, interval: 500, timeoutMsg: `Failed loading WDIO web page: ${await browser.getTitle()}`});


  let currentUrl = await browser.getUrl();
  expect(currentUrl).toEqual(expectedURL);
});

/** 
 Web Interactions
*/
Given(/^A web page is opened$/, async function () {
  await browser.url("");
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
  // let number = 12345;
  // let strNumber = number.toString();
  // let element = await $(`input[type=number]`);
  // await element.click();
  // await element.scrollIntoView();
  // await element.addValue(strNumber); // just ADDS value to string without clearing previous content
  // await element.setValue(strNumber);
  // for (let char of strNumber) {
  //   await browser.keys(char)
  // }
  // for (let index = 0; index < strNumber.length; index++) {
  //   await browser.pause(1000);
  //   let char = strNumber.charAt(index);
  //   await browser.keys(char);
  // }
  // await expect(element).toHaveValue(strNumber);
  /**
   * 2. Dropdown
   * Actions:
   * 1. Assert default option is selected
   * 2. Select by attribure, text, index
   * 3. Get a list of options
   */
  // await browser.url("/dropdown");
  // let checkedElement = await  $("select [selected=selected]");
  // await expect(await checkedElement.getText()).toEqual("Please select an option")
  // let dropdownElement = await $("#dropdown");
  // await dropdownElement.selectByAttribute("value", "1");
  // // select by specific option
  // let checkedElement = await $("select [selected=selected]");
  // await expect(await checkedElement.getText()).toEqual("Option 1");
  /**
   * 3. Get a list of options
   *
   */
  // let arrayOfElements = await $$(`select > option`);
  // arrayOfElements.forEach(async (element) => {
  //   if ((await element.getText()) === "Option 2") {
  //     await element.click();
  //   }
  // })
  // for (let index = 0; index < arrayOfElements.length; index++) {
  //   const element = arrayOfElements[index];
  //   if (await element.getText() === 'Option 2') {
  //     await element.click()
  //   }
  // }
  /**
   * 3. Checkbox
   * Actions:
   * 1. Select an option
   * 2. Unselect an option (if selected)
   * 3. Assert if option is selected
   * 4. Select all options
   */
  // await browser.url("/checkboxes");
  // await $$("#checkboxes input").then(async (arrayOfElements) => {
  //   for (let element of arrayOfElements) {
  //     if (!(await element.isSelected())) {
  //       element.click();
  //     }
  //   }
  // });
  // checkboxes.forEach(async (element) => {
  //   if (!await element.isSelected()) {
  //     await element.click();
  //   }
  // });
  // await browser.debug()
  /**
   * 4. Windows handling
   * Steps:
   * 1. Launch the browser
   * 2. Open another windows
   * 3. Switch to the window based on title
   * 4. Switch back to the main window
   *
   *
   * Methods used:
   * 1. getTitle()
   * 2. getWindowHande()
   * 3. getWindowHandles()
   * 4. switchToWindow()
   */
  // await browser.url("https://the-internet.herokuapp.com/");
  // await $(`a=Multiple Windows`).click();
  // await $(`=Click Here`).click();
  // await $("a=Elemental Selenium").click();
  // // await browser.debug();
  // let parentWindowHandler = await browser.getWindowHandle();
  // let windowHandler = await browser.getWindowHandles();
  // for (let window of windowHandler) {
  //   // console.log("Look below");
  //   await browser.switchToWindow(window);
  //   if (
  //     (await browser.getTitle()) ===
  //     "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"
  //   ) {
  //     await expect(await $(`h1=Elemental Selenium`).getText()).toEqual(
  //       "Elemental Selenium"
  //     );
  //     break;
  //   }
  // }
  // switch back to window parent
  // await browser.switchToWindow(parentWindowHandler);
  // await expect(await browser.getTitle()).toEqual(`The Internet`);
  /**
   * 4. handling alerts
   *
   * Methods used:
   * 1. isAlertOpen()
   * 2. acceptAlert()
   * 3. dismissAlert()
   * 4. getAlertText()
   * 5. sendAlertText()
   */
  // await $(`a=JavaScript Alerts`).click();
  // await $(`button=Click for JS Alert`).click();
  // if (await browser.isAlertOpen()) {
  //   await browser.acceptAlert();
  // }
  // await $(`button=Click for JS Confirm`).click();
  // if (await browser.isAlertOpen()) {
  //   await browser.dismissAlert();
  // }
  // await $(`button=Click for JS Prompt`).click();
  // if (browser.isAlertOpen()) {
  //   await browser.getAlertText()
  //   .then((alertText) => {
  //     expect(alertText).toEqual("I am a JS prompt");
  //   })
  //   await browser.sendAlertText("I am the Juggernaut, witch!");
  //   await browser.acceptAlert()
  //   .then(async() => {
  //     await expect (await $(`#result`)).toHaveText("You entered: I am the Juggernaut, witch!");
  //   })
  // }
  /**
   * 5. File upload
   */
  // await $(`=File Upload`).click();
  // console.log(process.cwd()); // returns current working part
  // // const filePath = path.join(__dirname + "../../../../data/file-upload/dummy.txt");
  // const filePath = path.join(`${process.cwd()}/data/file-upload/dummy.txt`);
  // await $(`#file-upload`).addValue(filePath);
  // await $(`#file-submit`).click();
  /**
   * 6. Iframes
   */
  // await $(`=Frames`).click();
  // await $(`=iFrame`).click();
  // let iFrameElement = await $(`#mce_0_ifr`);
  // await browser.switchToFrame(iFrameElement);
  // // await $(`#tinymce`).clearValue()
  // await $(`#tinymce`).setValue("Type casual text.");
  // await browser.switchToParentFrame()
  // //Interaction with Frames
  // await browser.debug();
  // await $('span=Best Sellers in Books').scrollIntoView()
  /**
   * Web table:
   * What are going to cover:
   * 1. Check number of rows and columns
   * 2. Get whole table data
   * 3. Get single row [based on condition]
   * 4. Get single column
   * 5. Get single cell value [based on another cell]
   */
  /**1. Check number of rows and columns */
  // await $(`a=Sortable Data Tables`).click();
  // let rowCount = await $$(`#table1 > tbody > tr`).length;
  // await expect(rowCount).toEqual(4);
  // let columnCount = await $$(`#table1 .header`).length;
  // await expect(columnCount).toEqual(6);
  /**2. Get whole table data */
  // let array = [];
  // for (let i = 1; i <= rowCount; i++) {
  //   let personObject = {
  //     lastname: "",
  //     firstname: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //   };
  //   for (let j = 1; j <= columnCount; j++) {
  //     let cellValue = await $(`//table[@id="table1"]//tr[${i}]//td[${j}]`).getText();
  //     if (j === 0) personObject.lastname = cellValue;
  //     if (j === 1) personObject.firstname = cellValue;
  //     if (j === 2) personObject.email = cellValue;
  //     if (j === 3) personObject.due = cellValue;
  //     if (j === 4) personObject.web = cellValue;
  //   }
  //   array.push(personObject)
  // }
  /** 3. Get single row [based on a condition] */
  // let array = [];
  // for (let i = 1; i <= rowCount; i++) {
  //   let personObject = {
  //     lastname: "",
  //     firstname: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //   };
  //   for (let j = 1; j <= columnCount; j++) {
  //     let cellValue = await $(`//table[@id="table1"]//tr[${i}]//td[${j}]`).getText();
  //     let firstname = await $(`//table[@id="table1"]//tr[${i}]//td[2]`).getText();
  //     if (firstname === "Jason") {
  //       if (j === 1) personObject.lastname = cellValue;
  //       if (j === 2) personObject.firstname = cellValue;
  //       if (j === 3) personObject.email = cellValue;
  //       if (j === 4) personObject.due = cellValue;
  //       if (j === 5) personObject.web = cellValue;
  //     }
  //   }
  //   if (personObject.firstname) {
  //     array.push(personObject);
  //   }
  // }
  // console.log(JSON.stringify( array));
  /**4. Get single column */
  /**
   * SCROLLING
   *
   * VISIBLE PORTION
   * windows object
   * 1. scrollBy
   *  Y-> [-]window.innerHeight
   */
  //Scroll down
  // await browser.execute(() => {
  //   window.scrollBy(0, window.innerHeight); // 1 monitor down
  // });
  // //Scroll up
  // await browser.execute(() => {
  //   window.scrollBy(0, -window.innerHeight); // 1 monitor DOWN
  // });
  // //Scroll down
  // await browser.execute(() => {
  //   window.scrollBy(0, window.innerHeight); // 1 monitor UP
  // });
  // /**
  //  * INVICIBLE PORTION
  //  * windows object:
  //  * 1. scrollTo
  //  * Y -> document.body.scrollTop[ScrollHeight]
  //  */
  // await browser.execute(() => {
  //   window.scrollTo(0, document.body.scrollHeight);
  // });
  // await browser.execute(() => {
  //   window.scrollTo(0, document.body.scrollTop);
  // });
});
