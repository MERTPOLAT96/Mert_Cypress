import {test,expect} from '@playwright/test';


test.beforeEach(async({page})=>{

    await page.goto("https://www.arabam.com/ikinci-el?gad_source=1&gclid=CjwKCAiA8NKtBhBtEiwAq5aX2OdlnDwbJ_I42Tmj93D-Uxp_tcjoiXC1g9d0QN4q01jumw_v4BbV9xoCOJ0QAvD_BwE")

    const cookies=page.locator("//button[text()='Kabul Et']");
    await cookies.click();
})


test("Multi-select dropdowns",async({page})=>{

    page.on("dialog",dialog=>{



        dialog.dismiss();
    })

    const ilanSahibi=page.locator("//span[text()='İl']")
    await ilanSahibi.click();


    const EuropeIstanbul=page.getByText("İstanbul Avrupa")
    const AsianIstanbul=page.getByText("İstanbul Anadolu")

    await EuropeIstanbul.check();
    await AsianIstanbul.check();




})

test("Dropdowns without select",async({page})=>{

    const dropdown2=page.getByText("İlan Sahibi");
    await dropdown2.click();

    const option=page.locator("//span[text()='Galeriden']")
    const option2=page.locator("//span[text()='Sahibinden']")

    await option.check();
    await option2.check();


})