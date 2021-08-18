package StepDefinitions;

import cucumber.api.PendingException;


import cucumber.api.java.en.*;
import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class LoginDemoSteps {

    static WebDriver driver;

//    @Given("Browser is open")
//    public void browser_is_open() {
//        System.setProperty("webdriver.chrome.driver", "C:\\Users\\user\\Downloads\\chromedriver_win32 (3)\\chromedriver.exe");
//        driver = new ChromeDriver();//Launch Chrome Browser
//
//        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
//        driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
//
//        //Maximize screen
//        driver.manage().window().maximize();
//    }
//
//    @And("user is on login page")
//    public void user_is_on_login_page() {
//
//        driver.get("https://example.testproject.io/web/");
//    }
//    @When("^user enters (.+) and (.+)$")
//    public void user_enters_and(String username, String password) throws Throwable {
//        driver.findElement(By.id("name")).sendKeys(username);
//        driver.findElement(By.id("password")).sendKeys(password);
//
//        Thread.sleep(2000);
//    }
//    @And("user clicks on login")
//    public void user_clicks_on_login() {
//
//        driver.findElement(By.id("login")).click();
//    }
//
//    @Then("user is navigated to the home page")
//    public void user_is_navigated_to_the_home_page() throws InterruptedException {
//
//        driver.findElement(By.id("pageProfile")).isDisplayed();
//
//        Thread.sleep(2000);
//
//    }
//
//    @Given("^user selects country$")
//    public void user_selects_country() throws Throwable {
//        System.out.println("country");
//        Select country = new Select(driver.findElement(By.id("country")));
//        country.selectByVisibleText("South Africa");
//        System.out.println("South Africa");
//    }
//    @And("^user enter all required details$")
//    public void user_enter_all_required_details(DataTable testData) throws Throwable {
//        List<String> details = testData.asList(String.class);
//
//        driver.findElement(By.id("country")).sendKeys(details.get(0));
//        driver.findElement(By.id("address")).sendKeys(details.get(1));
//        driver.findElement(By.id("email")).sendKeys(details.get(2));
//        driver.findElement(By.id("phone")).sendKeys(details.get(3));
//
//        Thread.sleep(2000);
//    }
//    @Then("^I Clicked on the save button$")
//    public void i_clicked_on_the_save_button() throws Throwable {
//
//        driver.findElement(By.id("save")).click();
//
//        driver.close();
//        driver.quit();
//    }
}
