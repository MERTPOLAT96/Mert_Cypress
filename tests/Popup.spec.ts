import {test,expect} from '@playwright/test';


test.describe("Form Fill",()=>{

    test.beforeEach(async({page})=>{

        await page.goto("https://demoqa.com/browser-windows")
    })
})



test("Popup",async({page,context})=>{

   

    const popupPromise=page.waitForEvent('popup')
    await page.getByText("New Window").nth(0).click();
    const popup=await popupPromise;
    await popup.waitForLoadState();

    const popupText=popup.getByText("This is a sample page")
    await expect(popupText).toBeVisible();
    await popup.close();
    await page.close();
})