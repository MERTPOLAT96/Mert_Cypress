import {test,expect} from '@playwright/test';


test("File Uploading",async({page,context})=>{


    await page.goto("https://demoqa.com/upload-download")

    const ufile=page.locator("#uploadFile");

    await ufile.setInputFiles("tests\\FileUploading1\\Appium.txt")

    const uploadFilesField=page.locator("#uploadedFilePath")
    expect(await uploadFilesField.textContent()).toContain("Appium.txt")


    const pageTwo=await context.newPage();

    await pageTwo.goto("https://www.foundit.in/")
    const uploadFileInput=pageTwo.locator("//*[@*='heroSection-buttonContainer_secondaryBtn__imgHolder']")
    await uploadFileInput.click();

    const fileUploadInput=pageTwo.locator("#file-upload")
    await fileUploadInput.setInputFiles("tests\\UploadFiles\\FRAMEWORK HAKKINDA.txt")

    const submtbtn=page.locator("#pop_upload")
    await submtbtn.click();

    const pageTwoUploadFileInput=pageTwo.locator("//*[@*='f15']");
    expect (await pageTwoUploadFileInput.textContent()).toContain("FRAMEWORK HAKKINDA.txt")

    
})

test("Multiple files upload",async({page})=>{


    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const secInput=page.locator("#filesToUpload")
    await secInput.setInputFiles(["tests\\FileUploading1\\Appium.txt","tests\\UploadFiles\\FRAMEWORK HAKKINDA.txt"])


    let fileNames:string[];
    fileNames=["Appium.txt","FRAMEWORK HAKKINDA.txt"]

    const fileArray=page.locator("//ul[@id='fileList']/li")

    for(const fileName of fileNames){

        expect(await fileArray.allTextContents()).toContain(fileName)
    }
})