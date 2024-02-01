import {test,expect} from '@playwright/test';


test("Automation practice",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")
    const buttonmale=page.locator("//input[@id='male']")
    await buttonmale.click();

    await expect(buttonmale).toBeChecked();
    await expect(page.locator("#name")).toBeEnabled();
    //await expect(page.locator("#name")).toBeDisabled();
    await expect(page.locator("#name")).toBeEditable();
    await expect(page.locator("#name")).toBeEmpty();
    await page.locator("#name").fill("Mert");
    await expect(page.locator("#name")).toHaveValue("Mert");
    await expect(page.locator("#name")).not.toBeEmpty();

    
})

test("DemoQA",async({page})=>{

    await page.goto("https://demoqa.com/")
    await expect(page.getByText("Forms")).toBeInViewport();
    await expect(page.getByText("Forms")).toContainText("Forms");
    await expect(page.getByText("Forms")).toContainText("Form");
    await expect(page.getByText("Forms")).toContainText("F");
    await expect(page.getByText("Forms")).toHaveText("Forms"); // 100 de 100 eşit olmalı
    await expect(page.getByText("Widgets")).toHaveText("Widgets");


})