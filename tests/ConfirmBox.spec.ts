import {test,expect} from '@playwright/test';


test.describe("Confirm Box",()=>{

    test.beforeEach(async({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/")

    })

    test("Confirm box Accept",async({page})=>{

        page.on("dialog",dialog=>{

            expect(dialog.type()).toBe("confirm") 
            expect(dialog.message()).toBe("Press a button!")  // içeriğinde 4 adet kullanılabilir alert , beforeunload , confirm , prompt

            dialog.accept();
        })

        await page.getByText("Confirm Box").click();
        const resultText=page.locator("#demo")

        expect (await resultText.textContent()).toBe("You pressed OK!")

})


})


