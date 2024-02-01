import {test,expect} from '@playwright/test';
import { url } from 'inspector';


test.describe("N11",()=>{

    test.beforeEach(async({page})=>{

        await page.goto("https://www.n11.com/")

    })

    test("Forms Fill",async({page})=>{


        const bar=page.locator("#searchData")
        await bar.fill("laptop");
        await expect(page.locator("#searchData")).toBeEditable()
        await expect(page.locator("#searchData")).toHaveValue("laptop")


        const searchButton=page.locator("[title='ARA']")
        await searchButton.click();


        const marka=page.locator("//h2[text()='Marka']")
        await marka.click();

        const asus=page.locator("//a[@title='Asus']")

        await asus.click();

        const laptop1=page.locator("//span[@class='btnBasket']").nth(3)
        await laptop1.click();



        const tobasket=page.locator("//a[text()='Sepete Git']")
        await tobasket.click();
        

        const cookies=page.locator("//span[text()='Tamam']")
        await cookies.click();

        const sepet=page.locator("[class='iconsBasketWhite']")
        await expect(page.locator("[class='iconsBasketWhite']")).toBeVisible()
        await sepet.click();

        const toplamtutar=page.getByText("Toplam Tutar")
        expect(await toplamtutar.textContent()).toBe("Toplam Tutar")


        const increaseValue=page.locator("[class='spinnerUp spinnerArrow']")
        await increaseValue.click();

        const returnmainpage=page.locator("[class='logo  home ']")
        await returnmainpage.click();
        console.log("Test basariyla tamamlanmistir")
    })

    test("Keyboard Actions",async({page})=>{

        const bar=page.locator("#searchData")
        await bar.fill("ev aletleri");

        await page.keyboard.down('Shift')

        for(let i=0; i>'aletleri'.length; i++){
            await page.keyboard.press("ArrowLeft")
            
        }

        await page.keyboard.up("Shift")

        await page.keyboard.press("Backspace")

        await page.keyboard.press("t")
        await page.keyboard.press("e")
        await page.keyboard.press("m")
        await page.keyboard.press("i")
        await page.keyboard.press("z")
        await page.keyboard.press("l")
        await page.keyboard.press("i")
        await page.keyboard.press("g")
        await page.keyboard.press("i")

        await page.keyboard.press("Control+A")
        await page.keyboard.press("Control+X")
        await page.keyboard.press("Control+V")
        await page.keyboard.press("Enter")
        


    })
})