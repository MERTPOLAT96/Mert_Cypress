import { test as base } from '@playwright/test';
import Home from '../Pages/HomePage';
import LoggedIn from '../Pages/LoggedInPage'
import Login from '../Pages/LoginPage';


    type MyFixtures = {

        home:Home,
        loggedIn:LoggedIn,
        login:Login

    };

    export const test = base.extend<MyFixtures>({

        home: async ({ page }, use ) => {

            await use (new Home(page));

        },

        loggedIn: async ({ page }, use) => {

            await use(new LoggedIn(page));
        },

        login:async( {page }, use)=>{

            await use (new Login( page));
        }

    });

    export { expect } from '@playwright/test'


        

    
    
    
