import {test,expect} from '@playwright/test';


test.beforeEach(async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
})


test("Multi-select dropdowns",async({page})=>{

    const multiSelect=page.locator("#colors")

    await multiSelect.selectOption(["Red","Blue","Green","Yellow","White"])

    await expect(multiSelect).toHaveValues(["red","blue","green","yellow","white"])




})