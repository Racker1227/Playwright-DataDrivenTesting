import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { readData } from "../utils/dataReader";

//const testData = readData("./test-data/loginDataNew.json");
//const testData = readData("./test-data/loginData.csv");
const testData = readData("./test-data/loginData.xlsx", "Sheet1");

test.describe("Login Tests", () => {
  //describe block is used to group related tests together

  for (const data of testData) {
    //if (data.run !== "yes") continue;     //skip the test if run flag is not yes

    test(`Login test for - ${data.username}`, async ({ page }) => {
      test.skip(data.run !== "yes", "Run Flag = no"); //skip the test if run flag is not yes

      const Login = new LoginPage(page);

      await test.step("Go to login page", async () => {
        await Login.gotologinPage();
      });

      await test.step("Perform login", async () => {
        await Login.login(data.username, data.password);
      });

      await test.step("Validate Result", async () => {
        if (data.expected === "success") {
          await expect(page).toHaveURL(
            "https://www.saucedemo.com/inventory.html",
          );
        } else {
          await expect(Login.errormessage).toBeVisible();
        }
      });
    });
  }
});
