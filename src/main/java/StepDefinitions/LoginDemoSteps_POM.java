package StepDefinitions;


import PageObjectModel.loginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class LoginDemoSteps_POM {

    static WebDriver driver;
    loginPage login;

    @Given("Browser is open")
    public void browser_is_open() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\user\\Downloads\\chromedriver_win32 (3)\\chromedriver.exe");
        driver = new ChromeDriver();//Launch Chrome Browser

        System.out.println("*****LoginPOM*****");

        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);

        //Maximize screen
        driver.manage().window().maximize();
    }

    @And("user is on login page")
    public void user_is_on_login_page() {

        driver.get("https://example.testproject.io/web/");
    }

    @When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_something_and_something(String strArg1, String strArg2) throws Throwable {
        login = new loginPage(driver);

        login.enterUsername(strArg1);
        login.enterPassword(strArg2);

        Thread.sleep(2000);
    }
//        @When("^user enters (.+) and (.+)$")
//    public void user_enters_and(String username, String password) throws Throwable {
//            login = new loginPage(driver);
//
//            login.enterUsername(username);
//            login.enterPassword(password);
//
////        driver.findElement(By.id("name")).sendKeys(username);
////        driver.findElement(By.id("password")).sendKeys(password);
//
//        Thread.sleep(2000);
//    }
    @And("user clicks on login")
    public void user_clicks_on_login() {

        login.clickLogin();
//        driver.findElement(By.id("login")).click();
    }

    @Then("user is navigated to the home page")
    public void user_is_navigated_to_the_home_page() throws InterruptedException {

        driver.findElement(By.id("pageProfile")).isDisplayed();

        Thread.sleep(2000);

    }
    @And("^user selects country$")
    public void user_selects_country() throws Throwable {
        System.out.println("country");
        Select country = new Select(driver.findElement(By.id("country")));
        country.selectByVisibleText("South Africa");
        System.out.println("South Africa");

        Thread.sleep(3000);
    }

    @When("^user completes from with the following details$")
    public void user_completes_from_with_the_following_details(DataTable data) throws Throwable {

        System.out.println("Aisha");

        Thread.sleep(3000);

        List<List<String>> details = data.raw();
        driver.findElement(By.id("address")).sendKeys(details.get(0).get(0));
        driver.findElement(By.id("email")).sendKeys(details.get(0).get(1));
        driver.findElement(By.id("phone")).sendKeys(details.get(0).get(2));

        Thread.sleep(3000);
    }

//    @Then("^user enters Home address as follows \"([^\"]*)\"$")
//    public void user_enters_home_address_as_follows_something(String strArg1) throws Throwable {
//        driver.findElement(By.id("address")).sendKeys(strArg1);
//
//        Thread.sleep(2000);
//    }
//
//    @And("^user enter Email address as follows \"([^\"]*)\"$")
//    public void user_enter_email_address_as_follows_something(String strArg1) throws Throwable {
//        driver.findElement(By.id("email")).sendKeys(strArg1);
//
//        Thread.sleep(2000);
//    }
//
//    @And("^user enters contact number as follows \"([^\"]*)\"$")
//    public void user_enters_contact_number_as_follows_something(String strArg1) throws Throwable {
//        driver.findElement(By.id("phone")).sendKeys(strArg1);
//
//        Thread.sleep(2000);
//    }
    @Then("^I Clicked on the save button$")
    public void i_clicked_on_the_save_button() throws Throwable {

        login.checkLogOutsDisplayed();

        driver.findElement(By.id("save")).click();

        driver.close();
        driver.quit();
    }
}
