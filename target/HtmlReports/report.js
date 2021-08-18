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
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-login-functionality;check-login-is-successful-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "test-login-functionality;check-login-is-successful-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Aisha",
        "12345"
      ],
      "line": 12,
      "id": "test-login-functionality;check-login-is-successful-with-valid-credentials;;2"
    },
    {
      "cells": [
        "Raghav",
        "12345"
      ],
      "line": 13,
      "id": "test-login-functionality;check-login-is-successful-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
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
  "name": "user enters Aisha and 12345",
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
formatter.match({
  "location": "LoginDemoSteps_POM.browser_is_open()"
});
formatter.result({
  "duration": 3895089300,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_is_on_login_page()"
});
formatter.result({
  "duration": 1222348400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aisha",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 22
    }
  ],
  "location": "LoginDemoSteps_POM.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2204742700,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_clicks_on_login()"
});
formatter.result({
  "duration": 79734300,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "duration": 2081934200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
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
  "name": "user enters Raghav and 12345",
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
formatter.match({
  "location": "LoginDemoSteps_POM.browser_is_open()"
});
formatter.result({
  "duration": 1620276700,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_is_on_login_page()"
});
formatter.result({
  "duration": 1352985300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raghav",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 23
    }
  ],
  "location": "LoginDemoSteps_POM.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2174860400,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_clicks_on_login()"
});
formatter.result({
  "duration": 76849700,
  "status": "passed"
});
formatter.match({
  "location": "LoginDemoSteps_POM.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "duration": 2063029700,
  "status": "passed"
});
});