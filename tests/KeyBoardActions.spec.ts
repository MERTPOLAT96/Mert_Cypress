import {test,expect} from '@playwright/test';


test("Keyboard Actions",async({page})=>{

    await page.goto("https://www.ebay.com/")


    const searchtext=page.locator("#gh-ac")
    await searchtext.fill("asus laptop")

    await page.keyboard.down('Shift');

    for(let i=0; i<'laptop'.length; i++){
        await page.keyboard.press("ArrowLeft")
        await page.waitForTimeout(3000);
    }

    await page.keyboard.up("Shift")

    await page.waitForTimeout(2000);

    await page.keyboard.press("Backspace")

    await page.keyboard.press("p")
    await page.keyboard.press("h")
    await page.keyboard.press("o")
    await page.keyboard.press("n")
    await page.keyboard.press("e")


    await page.keyboard.press("Control+A")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Control+X")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter");
})