Feature: Verify user token
  In access the platform

  Scenario: A invalid token and a valid user
    Given I send a POST request to "/users/verifyToken" with body:
    """
    {
      "cellPhoneNumber": "123456789"
      "token": "1234"
    }
    """
    Then the response status code should be 401
