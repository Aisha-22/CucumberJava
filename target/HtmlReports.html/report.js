$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Check login is successful with valid credentials",
  "description": "",
  "id": "test-login-functionality;check-login-is-successful-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CucumberRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user selects country",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user completes from with the following details",
  "rows": [
    {
      "cells": [
        "Brietta street Ridgeway Ext",
        "ash.hlatshwayo22@gmail.com",
        "0710191715"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Clicked on the save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "test-login-functionality;check-login-is-successful-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "test-login-functionality;check-login-is-successful-with-valid-credentials;;1"
    },
    {
      "cells": [
        "\"Aisha\"",
        "\"12345\""
      ],
      "line": 16,
      "id": "test-login-functionality;check-login-is-successful-with-valid-credentials;;2"
    },
    {
      "cells": [
        "\"Raghav\"",
        "\"12345\""
      ],
      "line": 17,
      "id": "test-login-functionality;check-login-is-successful-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Check login is successful with valid credentials",
  "description": "",
  "id": "test-login-functionality;check-login-is-successful-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CucumberRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Aisha\" and \"12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user selects country",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user completes from with the following details",
  "rows": [
    {
      "cells": [
        "Brietta street Ridgeway Ext",
        "ash.hlatshwayo22@gmail.com",
        "0710191715"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Clicked on the save button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDemoSteps_POM.browser_is_open()"
});
formatter.result({
  "duration": 4821505900,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_is_on_login_page()"
});
formatter.result({
  "duration": 1953862800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aisha",
      "offset": 13
    },
    {
      "val": "12345",
      "offset": 25
    }
  ],
  "location": "LoginDemoSteps_POM.user_enters_something_and_something(String,String)"
});
formatter.result({
  "duration": 2228270201,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_clicks_on_login()"
});
formatter.result({
  "duration": 88331400,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "duration": 2089492100,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_selects_country()"
});
formatter.result({
  "duration": 3131649400,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_completes_from_with_the_following_details(DataTable)"
});
formatter.result({
  "duration": 6363571800,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.i_clicked_on_the_save_button()"
});
formatter.result({
  "duration": 4963144300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Check login is successful with valid credentials",
  "description": "",
  "id": "test-login-functionality;check-login-is-successful-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CucumberRun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Raghav\" and \"12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user selects country",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user completes from with the following details",
  "rows": [
    {
      "cells": [
        "Brietta street Ridgeway Ext",
        "ash.hlatshwayo22@gmail.com",
        "0710191715"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Clicked on the save button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDemoSteps_POM.browser_is_open()"
});
formatter.result({
  "duration": 1857877900,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_is_on_login_page()"
});
formatter.result({
  "duration": 1638712301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raghav",
      "offset": 13
    },
    {
      "val": "12345",
      "offset": 26
    }
  ],
  "location": "LoginDemoSteps_POM.user_enters_something_and_something(String,String)"
});
formatter.result({
  "duration": 2243740300,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_clicks_on_login()"
});
formatter.result({
  "duration": 87344200,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "duration": 2080650500,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_selects_country()"
});
formatter.result({
  "duration": 12237341401,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d92.0.4515.159)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-O2CS8T8\u0027, ip: \u0027192.168.8.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.159, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50616}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 78f0c235b7fd349e8cc8ddfa9ae9c9aa\n*** Element info: {Using\u003did, value\u003dcountry}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinitions.LoginDemoSteps_POM.user_selects_country(LoginDemoSteps_POM.java:82)\r\n\tat ✽.And user selects country(LoginDemo.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_completes_from_with_the_following_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginDemoSteps_POM.i_clicked_on_the_save_button()"
});
formatter.result({
  "status": "skipped"
});
});