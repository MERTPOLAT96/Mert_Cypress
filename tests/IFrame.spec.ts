import {test,expect} from '@playwright/test';


test.describe("IFrame",()=>{

    test.beforeEach(async({page})=>{

        await page.goto("https://demoqa.com/frames")

    })

    test("IFrame",async({page})=>{

        const frame1=page.frameLocator("#frame1")
        const elementText=await frame1.getByText("This is a sample page").textContent();

        expect(elementText).toBe("This is a sample page");


        })

        test("IFrame 2",async({page})=>{

            const frame2=page.frame({url:"https://demoqa.com/sample"});
            const elementText=await frame2?.getByText("This is a sample page").textContent();
            expect(elementText).toBe("This is a sample page");
        })

        test.only("IFrame3",async({page})=>{

            await page.goto("https://testautomationpractice.blogspot.com/")

            const frame3=page.frame({url:"https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169"})

            const name:string="MERT";
            const textField=frame3?.locator("#RESULT_TextField-0")
            await textField?.fill(name)
            expect (await textField?.inputValue()).toBe(name);

            const malebutton=frame3?.getByText("Male").nth(0)
            await malebutton?.check();
            expect(await malebutton?.isChecked()).toBeTruthy();

            let date:string;
            date="14/09/1476";

            const datefield=frame3?.locator("#RESULT_TextField-2")
            await datefield?.fill(date);
            expect(await datefield?.inputValue()).toBe(date);


            const dropdown=frame3?.locator("#RESULT_RadioButton-3")
            const selectedInputValue="Radio-3";
            await dropdown?.selectOption({value:selectedInputValue})
            expect(await dropdown?.inputValue()).toBe(selectedInputValue)




        })
})


