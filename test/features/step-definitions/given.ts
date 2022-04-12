import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login to inventory web page$/, async () => {
  /** 1. Go to inventory app */
  await browser.url("https://www.saucedemo.com");
  await browser.maximizeWindow();


  // await browser.debug()
  /** 2. Login to the app */
  try {
    await $(`#user-name`).setValue("standard_user");
    await $(`#password`).setValue("secret_sauce");
    await $(`#login-button`).click();
  } catch (err) {
    console.log(err);
    console.log(`Error in first login. Retrying`);
    await browser.refresh()
    await browser.pause(2000)
    await $(`#user-name`).setValue("standard_user");
    await $(`#password`).setValue("secret_sauce");
    await $(`#login-button`).click();
  }


  // /** Login with another user */
  // await browser.pause(3000);
  // await browser.reloadSession();
  // await browser.url("https://www.saucedemo.com");
  // await browser.maximizeWindow();
  // await $(`#user-name`).setValue("problem_user");
  // await $(`#password`).setValue("secret_sauce");
  // await $(`#login-button`).click();
});
