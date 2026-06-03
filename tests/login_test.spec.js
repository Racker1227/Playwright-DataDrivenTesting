import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';

test("Valid Login Test", async ({page}) => {

    const Login = new LoginPage(page);

    await Login.gotologinPage();
    //await Login.login("standard_user","secret_sauce");
    await Login.login(loginData.valid.username,
        loginData.valid.password
    );
    
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    
    //await Login.verifyLoginSuccess();
});


test("Invalid Login Test", async ({page}) => {

    const Login = new LoginPage(page);

    await Login.gotologinPage();
    //await Login.login("standard_user","secret_sauce");
    await Login.login(loginData.invalid.username,
        loginData.invalid.password
    );
    
    await expect(Login.error_message).toBeVisible();
    
    //await Login.verifyLoginSuccess();
});