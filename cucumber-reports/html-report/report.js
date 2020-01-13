$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("POST_Method/postMethodToGetToekn.feature");
formatter.feature({
  "line": 1,
  "name": "Authenticate username and password",
  "description": "",
  "id": "authenticate-username-and-password",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify username and password to get token",
  "description": "",
  "id": "authenticate-username-and-password;verify-username-and-password-to-get-token",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user hits \"http://13.126.80.194:8080\" endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "parse the response and get the toekn",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://13.126.80.194:8080",
      "offset": 11
    }
  ],
  "location": "Steps.user_hits_A_firstEndpoint(String)"
});
formatter.result({
  "duration": 3766358300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_hits_B_response_and_get_the_toekn()"
});
formatter.result({
  "duration": 6714000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "user hits get method to get customer records",
  "description": "",
  "id": "authenticate-username-and-password;user-hits-get-method-to-get-customer-records",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user hits baseUrl \"http://13.126.80.194:8080\" with \"api/v1/users\" endpoint",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://13.126.80.194:8080",
      "offset": 19
    },
    {
      "val": "api/v1/users",
      "offset": 52
    }
  ],
  "location": "Steps.user_hits_C_Second_endpoint(String,String)"
});
formatter.result({
  "duration": 180057800,
  "status": "passed"
});
});