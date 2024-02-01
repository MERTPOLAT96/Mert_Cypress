import {test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
})


test.describe("Form elements",async()=>{

    test("text box",async({page})=>{

        const day1=page.getByText("Sunday")
        const day2=page.getByText("Wednesday")
        const day3=page.getByText("Saturday")


        await day1.check();
        await expect(day1).toBeChecked();
        await day2.check();
        await expect(day2).toBeChecked();
        await day3.check();
        await expect(day3).toBeChecked();

    })

    test("text box for ile yapilisi",async({page})=>{

        const checkArray=[page.getByText("Sunday"),page.getByText("Wednesday"),page.getByText("Saturday")]


        for(const each of checkArray){

            await each.check();
            await expect(each).toBeChecked();
        }

    })
})