Feature: Example feature
  In order to navigate the site well
  the navbar should have working links

  Scenario: Clicking the 'search' button
    Given I am logged in and on '/'
    When I click click the 'search' link in the navbar
    Then I should navigate to '/search'

  Scenario: Clicking the 'home' button
    Given I am logged in and on '/searc'
    When I click click the 'home' link in the navbar
    Then I should navigate to '/'