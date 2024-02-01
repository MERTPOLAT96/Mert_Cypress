import {test,expect} from '@playwright/test';

test.describe("Actions",()=>{

    test("Double Actions",async({page,context})=>{

        await page.goto("https://demoqa.com/buttons")
        const doubleclick=page.getByText("Double Click Me")
        await doubleclick.dblclick();
       const assertions=page.locator("id=doubleClickMessage")
       expect(await assertions.textContent()).toBe("You have done a double click")

       const pageTwo=await context.newPage();
       await pageTwo.goto("https://testautomationpractice.blogspot.com/")  // yeni bir linke geçiyorum
       const coppytext=pageTwo.getByText("Copy Text");
       await coppytext.dblclick();

       const coppiedTextBox=pageTwo.locator("#field2");
       expect(await coppiedTextBox.inputValue()).toBe("Hello World!")

      

       


        

    })
        

    })

