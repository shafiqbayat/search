import { test, expect } from '@playwright/test';


let priceLocator = "(//span[@class='a-price aok-align-center reinventPricePriceToPayMargin priceToPay']//span[@aria-hidden='true'])[1]";

test('Verify all links under ul tag are displayed and enabled', async ({ page }) => {


for(let i=1; i<=3; i++){
  
   
    await page.goto('https://amazon.com/');
    let searchbox = page.locator("//input[@id='twotabsearchtextbox']");
    await searchbox.fill('0w-16');
    await searchbox.press('Enter');
    await page.click("text='Mobil 1 Advanced Fuel Economy Full Synthetic Motor Oil 0W-16, 5 Quart'");
    let price =  page.locator(priceLocator);
    console.log("Price is : ", await price.innerText());
    await expect(price).toBeVisible();
}


  });

  //these codes are just examples, you can add more tests as per your requirement





  