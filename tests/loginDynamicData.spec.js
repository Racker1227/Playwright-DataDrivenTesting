import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import loginData from "../test-data/loginDataNew.json";

loginData.forEach((data) => {
  if (!data.run) return;

  test(`Login Test ${data.username}`, async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.gotologinPage();
    await Login.login(data.username, data.password);

    if (data.expected === "success") {
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    } else {
      await expect(Login.errormessage).toBeVisible();
    }
  });
});
