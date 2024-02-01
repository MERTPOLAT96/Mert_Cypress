import {test,expect} from '@playwright/test';


test.describe("New Tab",()=>{

    test.beforeEach(async({page}) => {

        await page.goto("https://demoqa.com/browser-windows")
        
    });

    test("New Tab",async({page})=>{

        const newtab=page.locator("#tabButton");
        await newtab.click();

        //const newtabtext=page.getByText("This is a sample page");
        //await expect(newtabtext).toBeVisible();  hatalı kod page nesnesi ile yeni açılan tabde işlem yapılamıyor

        
    })

    test("New Tab 2(Doğru olani)",async({page,context})=>{


        const newtab=page.locator("#tabButton");
        await newtab.click();

        const pagePromise=context.waitForEvent('page');  // bu event tetiklenince çalış diyorum
        await newtab.click();

        const newPage=await pagePromise; // pagepromise i newpage e atadım
        await newPage.waitForLoadState(); // yeni sayfanın bilgilerini aldım (newpage yardımıyla)

        const newtabtext=newPage.getByText("This is a sample page");
        await expect(newtabtext).toBeVisible();     
        
        
        await page.bringToFront() // o sayfayı gösterir 
        const elements=page.locator("//div[text()='Elements']");  // page sayfasına ait olduğu için page ismini kullanıyorum
        await elements.click();

        await newPage.bringToFront(); // 2.nci yani seçilen sayfayı ön plana geçiriyor
        await expect(newPage.url()).toBe("https://demoqa.com/sample") // url doğruladım


        
    })

    test("New Tab 3(For ile yapilisi)",async({page,context})=>{


        const newtab=page.locator("#tabButton");

        const pagePromise=context.waitForEvent('page');  // bu event tetiklenince çalış diyorum
        await newtab.click(); // pagepromise i newpage e atadım
        const newPage=await pagePromise;
        await newPage.waitForLoadState(); // yeni sayfanın bilgilerini aldım (newpage yardımıyla)

        const allpages=context.pages();   // contexteki tüm sayfaların bilgilerini alıyor allpages değişkenine atıyor


        for(const eachPage of allpages){

            await eachPage.waitForTimeout(3000);
            await eachPage.bringToFront();
        }

        
    })

    test("Popup",async({page,context})=>{

   

        const popupPromise=page.waitForEvent('popup')
        await page.getByText("New Window").nth(0).click();
        const popup=await popupPromise;
        await popup.waitForLoadState();
    
        const popupText=popup.getByText("This is a sample page")
        await expect(popupText).toBeVisible();
        await popup.close();
        await page.close();
    })



})