import { Page,expect} from '@playwright/test';

export default class Home{

    page:Page;
    
    constructor(page:Page){

        this.page=page;
    }

    async navigateToTheSite(url:string){

        await this.page.goto(url)
    }

    async verifyTheaccessibility(url:string){

        expect(url).toBe(this.page.url())
    }

    loginBtn=()=>this.page.locator("#login2")

    async clickLoginButton(){
        await this.loginBtn().click();
    }
}