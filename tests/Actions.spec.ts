import {test,expect} from '@playwright/test';

test.describe("Actions",()=>{

    test("Hover Actions",async({page})=>{

        await page.goto("https://www.amazon.com.tr/")

        const c=page.locator("#sp-cc-accept").click();

        const click1=page.locator("//a[text()='Çok Satanlar']").nth(0)
        await click1.hover();

        
    
        

    })


})


    





