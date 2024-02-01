import { Page,expect} from '@playwright/test';


export default class Login{

    page:Page;

    constructor(page:Page){
        this.page=page;
    }

    username= ()=>this.page.locator("#loginusername");

    async fillTheUsername(username:string){

        await this.username().fill(username)
    }

    password= ()=>this.page.locator("#loginpassword")

    async fillThePassword(password:string){

        await this.password().fill(password)
    }

    sbmtBtn= ()=>this.page.locator("//button[text()='Log in']")

    async ClickSubmitBtn(){

        await this.sbmtBtn().click();
    }
    
}