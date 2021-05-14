Feature: Automation Practice Product Purchase Flow

  Scenario Outline: As a user, I should be able to register and able to chekout a product

    Given Im on the Home page
    When I click on sign-in and submit
    Then Im on the home page
    Then Fill Registration Form
    Then Verify Registration and Logout
    Then Login and verify
    When I Enter product name and search, Add to Cart
    Then Proceed to checkout and verify payments page
    
  