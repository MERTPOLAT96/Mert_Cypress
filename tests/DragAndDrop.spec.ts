import {test,expect} from '@playwright/test';

test.describe("Actions",()=>{

    test("Drag and Drop",async({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/")
       
        const drag1=page.getByText("Drag me to my target")
        const targetelement=page.locator("#droppable")

        await drag1.dragTo(targetelement)

        const droppedText:string|null=await page.locator("#droppable p").textContent();

        expect(droppedText).toBe("Dropped!")

       


        

    })

})