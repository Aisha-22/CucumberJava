Feature: Details data creation

  Scenario: Free CRM Create a new deal scenario

    Given user is already on login page
    When title of login page is Free CRM
    Then user enters username and password
  | Aisha | test@123 |
    Then user clicks on login button
    Then user is on login page
    Then user moves to new deal page
    Then user enters deal details
    | test deal | 1000 | 50 | 10 |
    