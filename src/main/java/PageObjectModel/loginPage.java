package PageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class loginPage {

    protected WebDriver driver;

   By txt_username = By.id("name");

   By txt_password = By.id("password");

   By btn_login = By.id("login");

   By btn_logout = By.id("logout");

    //Constructor
    public loginPage(WebDriver driver){

        this.driver = driver;

//        Verify you on the login page and create a condition
        if (driver.getTitle().equals("TestProjectDemo")) {
            throw new IllegalStateException("This is not Login Page. The current page is " + driver.getCurrentUrl());
        }
    }

    public void enterUsername(String username) {

        driver.findElement(txt_username).sendKeys(username);
    }

    public void enterPassword(String password) {

        driver.findElement(txt_password).sendKeys(password);
    }

    public void clickLogin() {

        driver.findElement(btn_login).click();
    }

    public void checkLogOutsDisplayed() {

        driver.findElement(btn_logout).isDisplayed();
    }
}
