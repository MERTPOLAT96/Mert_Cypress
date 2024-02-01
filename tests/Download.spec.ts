import {test,expect} from '@playwright/test';


test("Download",async({page})=>{


    await page.goto("https://demoqa.com/upload-download")

    const downloadPromise=page.waitForEvent('download')
    await page.getByRole('link',{name:"Download"}).click()
    const download=await downloadPromise;

    const filePath:string="C:\fakepath\indir.jpg"
    await download.saveAs(filePath)


    const fs=require('fs')
    expect(fs.existsSync(filePath)).toBe(true)

    

    
})