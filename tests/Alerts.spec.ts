import {test,expect} from '@playwright/test';


test.beforeEach(async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    
})

test("Alerts",async({page})=>{

    page.on("dialog",dialog=>{

        expect(dialog.type()).toBe("alert")
        expect(dialog.message()).toBe("I am an alert box!");
        dialog.accept();
    })

    await page.click("//button[text()='Alert']");
})