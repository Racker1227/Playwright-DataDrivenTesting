
exports.LoginPage = class LoginPage {
    constructor(page){
        this.page = page;
        this.usename_textbox = page.getByPlaceholder("Username");
        this.password_textbox = page.getByPlaceholder("Password");
        this.login_button = page.locator("#login-button");
        this.error_message = page.locator("//button[@class='error-button']");
    }

    async gotologinPage(){
        await this.page.goto('https://www.saucedemo.com/')
    }

    async login(username,password){
        await this.usename_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();

    }

    /*
    async verifyLoginSuccess(){
            await  this.page.waitForURL("https://www.saucedemo.com/inventory.html");
        
    }
            */

    
}