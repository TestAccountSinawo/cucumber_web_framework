Feature: Search For Sport Srticles In 2023

  Scenario Outline: As a report I want be able to search a wild range of sport articles for year 2023
    Given BBC url provided for sport articles
    When A report searches sport articles using a searchPhrase as "<searchPhrase>"
    Then Verify the returned search results

    Examples:
      | searchPhrase  |
      | Sport in 2023 |
