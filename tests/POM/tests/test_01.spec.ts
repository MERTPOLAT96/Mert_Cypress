import { test} from '../Fixtures/Fixtures';
import * as data from '..\\TestData\\data.json'



test.beforeEach(async({page,baseURL,home})=>{

    await home.navigateToTheSite(`${baseURL}`);
})

test("Page accessibility test",async({page,baseURL,home})=>{


    await home.verifyTheaccessibility(data.url)
})

test("Login test with right credentials",async({page,home,login,loggedIn})=>{

    

    await home.clickLoginButton();
    await login.fillTheUsername(data.username)
    await login.fillThePassword(data.password)
    await login.ClickSubmitBtn();
    await loggedIn.verifyTheLogin();
    

})
