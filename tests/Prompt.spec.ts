import {test,expect} from '@playwright/test';


test.beforeEach(async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    
})

test("Prompt Accept",async({page})=>{

    let promptvalue:string;
    promptvalue="MERT"

    page.on("dialog",dialog=>{

        expect(dialog.type()).toBe("prompt")
        expect(dialog.message()).toBe("Please enter your name:")
        expect(dialog.defaultValue()).toBe("Harry Potter")
        dialog.accept(promptvalue);
    })

    await page.locator("//button[text()='Prompt']").click();
    const resultText=page.locator("#demo")

    expect(await resultText.textContent()).toBe(`Hello ${promptvalue}! How are you today?`)
})

test("Prompt Dismiss",async({page})=>{

    //let promptvalue:string;
    //promptvalue="MERT"

    page.on("dialog",dialog=>{

        expect(dialog.type()).toBe("prompt")
        expect(dialog.message()).toBe("Please enter your name:")
        expect(dialog.defaultValue()).toBe("Harry Potter")
        dialog.dismiss();
    })

    await page.locator("//button[text()='Prompt']").click();
    const resultText=page.locator("#demo")

    expect(await resultText.textContent()).toBe(`User cancelled the prompt.`)
})