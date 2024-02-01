import {test,expect} from '@playwright/test';


test("Soft Assertions",async({page})=>{

    await page.goto("https://demoqa.com/")

    await expect.soft(page.getByText("Forms")).toBeInViewport();

    await expect.soft(page.getByText("Forms"),"assertion1").toContainText("Forms");
    await expect.soft(page.getByText("Forms"),"assertion2").toContainText("Form");
    await expect.soft(page.getByText("Forms"),"assertion3").toContainText("Fo");
    await expect.soft(page.getByText("Forms"),"assertion4").toHaveText("Forms");
})