import { test} from '@playwright/test';
import Home from '../Pages/HomePage';
import * as data from '..\\TestData\\data.json'
import LoggedIn from '../Pages/LoggedInPage';
import Login from '../Pages/LoginPage';



test.beforeEach(async({page,baseURL})=>{

    const home=new Home(page);

    await home.navigateToTheSite(`${baseURL}`);
})

test("Page accessibility test",async({page,baseURL})=>{

    const home=new Home(page);

    await home.verifyTheaccessibility(data.url)
})

test("Login test with right credentials",async({page})=>{

    const home=new Home(page);
    const login=new Login(page);
    const loggedIn=new LoggedIn(page);

    await home.clickLoginButton();
    await login.fillTheUsername(data.username)
    await login.fillThePassword(data.password)
    await login.ClickSubmitBtn();
    await loggedIn.verifyTheLogin();
    

})
