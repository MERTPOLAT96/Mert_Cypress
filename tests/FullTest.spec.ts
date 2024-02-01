import {test,expect} from '@playwright/test';
import { stat } from 'fs';


test.describe("Form Fill",()=>{

    test.beforeEach(async({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/")
        await expect(page).toHaveTitle("Automation Testing Practice")
        await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    })

    test("Form Fill",async({page})=>{

        const nameFill=page.locator("#name")
        await nameFill.fill("MERT")
        await expect(nameFill).toHaveValue("MERT")

        const emailfill=page.locator("#email")
        await emailfill.fill("mertpolat@gmail.com")
        await expect(emailfill).toHaveValue("mertpolat@gmail.com")

        const phonefill=page.locator("#phone")
        await phonefill.fill("5478")
        await expect(phonefill).toHaveValue("5478")

        const addressfill=page.locator("#textarea")
        await addressfill.fill("sokak")
        await expect(addressfill).toHaveValue("sokak")

        const buttonmale=page.locator("[name='gender']").nth(0);
        await buttonmale.check();
        await expect(buttonmale).toBeChecked();


        const buttonfemale=page.locator("[name='gender']").nth(1);
        await buttonfemale.check();
        await expect(buttonfemale).toBeChecked();


        const witharray=[page.locator("#sunday"),page.locator("#monday"),page.locator("#tuesday"),page.locator("#wednesday"),page.locator("#thursday"),page.locator("#friday"),page.locator("#saturday")]

        for(const each of witharray){

            await each.check();
            await expect(each).toBeChecked();
        }

        const dropdown=page.locator("#country")

        await dropdown.selectOption({value:"usa"})
        await dropdown.selectOption({index:3})
        await dropdown.selectOption({index:5})
        await dropdown.selectOption("India")

        const options=page.locator("#country option")

        await expect(options).toHaveCount(10);

        expect(await options.allTextContents()).toContain("China")

        const optionsArray=page.$$("#country option")

        expect(await optionsArray).toHaveLength(10);


        let status:boolean;

        status=true;

        for(const each of await optionsArray){

            let opt=await each.textContent();
            if(opt=="Japan"){
                status=true;
                break;
            }
        }

        const multiselect=page.locator("#colors")

        await multiselect.selectOption(["Red","Blue","Green","Yellow","White"])

        await expect(multiselect).toHaveValues(["red","blue","green","yellow","white"])


        const dateCheck=page.locator("[class='hasDatepicker']")
        await dateCheck.fill("01/12/2024")


        page.on("dialog",dialog=>{

            expect(dialog.type()).toBe("alert")
            expect(dialog.message()).toBe("I am an alert box!")
            dialog.accept();
        })

        await page.click("//button[text()='Alert']")

        

        

    
    
    
            
    
                
            })

        })

        



        

            
        


    
