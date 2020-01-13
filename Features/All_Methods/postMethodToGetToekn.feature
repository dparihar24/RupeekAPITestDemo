Feature: Test various apis of Customers Search Application   

Scenario: verify username and password to get token 
Given user hits "http://13.126.80.194:8080" endpoint
Then parse the response and get the toekn


Scenario: user hits get method to get customer records
Given user hits baseUrl "http://13.126.80.194:8080" with "api/v1/users" endpoint
Then parse the users api response to perform various validations

Scenario Outline: user hits get method to get specific customer information with phone number
Given user hits baseUrl "http://13.126.80.194:8080" with "api/v1/users/" with "<phone>" endpoint
Then validate specific user information using phone "<phone>" endpoint
Examples:                     		
 |phone      |
 |8037602400 |
 |9972939567 |
 |9995879555 |

  
		
