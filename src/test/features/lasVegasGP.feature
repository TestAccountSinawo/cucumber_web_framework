Feature: Validation In A Table Of Results

  Scenario: A reporter wants to report on the top 3 of 2023 Las Vegas Grand Prix results
    Given User navigates to the valid url
    When A user navigates to Formular1 Results
    When User selects the year 2023
    Then User checks the Las Vegas Grand Prix