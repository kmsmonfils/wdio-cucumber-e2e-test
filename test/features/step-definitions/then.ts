import { Then } from "@wdio/cucumber-framework";

Then(/^inventory page should list (.*)$/, async (numberOfProducts) => {
  if (!numberOfProducts) throw Error(`Invalid number provided: ${numberOfProducts}`);
  
  let elementsArray = await $$(`.inventory_item_name`);

  await expect(elementsArray).toBeElementsArrayOfSize(parseInt(numberOfProducts));
});
/**
 * Steps:
 * 1. Get price list
 * 2. Convert string to number
 * 3. Assert if any value is <= 0
 */
Then(/^Validate all products have valid price$/, async () => {
  const elementsArray = await $$(`.inventory_item_price`);
  let priceArray = [];
  for (let index = 0; index < elementsArray.length; index++) {
    const price = await elementsArray[index].getText();
    priceArray.push(price);
  }

  // console.log(priceArray);

  /** 2. Conver string to number */

  let priceNumArray = priceArray.map((element) => +element.replace("$", "")); //Number()

  /** 3. Assert if any value is <= 0 */
  let invalidPriceArray = priceNumArray.filter((itemPrice) => itemPrice <= 0);
  await expect(invalidPriceArray.length).toEqual(0);
});
