Feature: Create a new user
  In order to have users in the platform
  As a any clients
  I want to create a new user

  Scenario: A valid unexisting user
    Given I send a PUT request to "/users/d87fb233-a0b1-46ce-a968-112cb26d5a4b" with body:
    """
    {
      "id": "d87fb233-a0b1-46ce-a968-112cb26d5a4b",
      "cellPhoneNumber": "123456789"
    }
    """
    Then the response status code should be 201
  
