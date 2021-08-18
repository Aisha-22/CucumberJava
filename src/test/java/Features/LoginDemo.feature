Feature: Test login functionality

  @CucumberRun
  Scenario Outline: Check login is successful with valid credentials
    Given Browser is open
    And user is on login page
    When user enters <username> and <password>
    And user clicks on login
    Then user is navigated to the home page
    And user selects country
    When user completes from with the following details
      |Brietta street Ridgeway Ext |ash.hlatshwayo22@gmail.com |0710191715 |
    Then I Clicked on the save button
    Examples:
      | username | password |
      |"Aisha"     |"12345"     |
      |"Raghav"    |"12345"     |

#  @CucumberTest
#  Scenario: Check login is successful with valid credentials
#    Given Browser is open
#    And user is on login page
#    When user enters "Aisha" and "12345"
#    And user clicks on login
#    Then user is navigated to the home page
#    And user selects country
#    When user completes from with the following details
#    |Brietta street Ridgeway Ext |ash.hlatshwayo22@gmail.com |0710191715 |
#    Then I Clicked on the save button