Feature: Authenticate username and password   

Scenario: verify username and password to get token 
Given user hits "http://13.126.80.194:8080" endpoint
Then parse the response and get the toekn


Scenario: user hits get method to get customer records
Given user hits baseUrl "http://13.126.80.194:8080" with "api/v1/users" endpoint


  
		
