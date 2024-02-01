import {test,expect} from '@playwright/test';

    test("Alert",async({page})=>{


        await page.goto("https://testautomationpractice.blogspot.com/")

        page.on("dialog",dialog=>{  // window handler de tanımlamasını yapıyoruz

            expect(dialog.type()).toBe("alert");   
            expect(dialog.message()).toBe("I am an alert box!"); // dialogun içindeki mesajı doğruladım
            dialog.accept()
        })

        await page.click("//button[text()='Alert']");


        
            })

        
