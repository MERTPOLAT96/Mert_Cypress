import {test,expect} from '@playwright/test';

test.describe("Actions",()=>{

    test("Hover Actions",async({page})=>{

        await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    
        const rightclick=page.getByText("right click me")
        await rightclick.click();

        await rightclick.click({button:'right'})

        const rightclickmenu=page.locator("//ul[@class='context-menu-list context-menu-root']")

        await expect(rightclickmenu).toBeVisible()
        

    })

})