import {test,expect} from '@playwright/test';


test.beforeEach(async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
})


test.describe("Dropdowns intro",async()=>{

    test("Dropdowns",async({page})=>{

        const dropdown=page.locator("#country")

        await dropdown.selectOption("United Kingdom") // text ile alınışı
        await dropdown.selectOption({value:"brazil"})     // value ile alınışı
        await dropdown.selectOption({index:5});

        const options=page.locator("#country option")         // country altındaki optionlara geçiyorum

        await expect(options).toHaveCount(10);  //country içerisinde 10 adet değer olup olmadığını doğruluyorum

         expect(await options.allTextContents()).toContain("France")

        const optionsArray=page.$$("#country option")

        expect(await optionsArray).toHaveLength(10);  // optionslar içerisindeki valueları alıyorum (10 tane)

        let status:boolean;

        status=false;

        for(const each of await optionsArray){

            let opt=await each.textContent();
            if(opt=="Australia"){
                status=true;
                break;
            }
        }



    })
})