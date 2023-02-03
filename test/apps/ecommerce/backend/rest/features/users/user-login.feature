Feature: Login user in the platform
  In order to access the platform

  Scenario: A existing user login in the platform
    Given I send a POST request to "/users/login" with:
    """
    {
      "cellPhoneNumber": "123456789"
    }
    """
    Then the response status code should be 200
   