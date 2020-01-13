$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("All_Methods/postMethodToGetToekn.feature");
formatter.feature({
  "line": 1,
  "name": "Test various apis of Customers Search Application",
  "description": "",
  "id": "test-various-apis-of-customers-search-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify username and password to get token",
  "description": "",
  "id": "test-various-apis-of-customers-search-application;verify-username-and-password-to-get-token",
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
  "location": "Steps.hitPostMethod(String)"
});
formatter.result({
  "duration": 2138767200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.parseResponseToGetToken()"
});
formatter.result({
  "duration": 20703400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "user hits get method to get customer records",
  "description": "",
  "id": "test-various-apis-of-customers-search-application;user-hits-get-method-to-get-customer-records",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user hits baseUrl \"http://13.126.80.194:8080\" with \"api/v1/users\" endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "parse the users api response to perform various validations",
  "keyword": "Then "
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
  "location": "Steps.hitGetMethodToGetUsersInfo(String,String)"
});
formatter.result({
  "duration": 106904700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.parse_the_users_api_response_to_perform_various_validations()"
});
formatter.result({
  "duration": 3157300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "user hits get method to get specific customer information with phone number",
  "description": "",
  "id": "test-various-apis-of-customers-search-application;user-hits-get-method-to-get-specific-customer-information-with-phone-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user hits baseUrl \"http://13.126.80.194:8080\" with \"api/v1/users/\" with \"\u003cphone\u003e\" endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "validate specific user information using phone \"\u003cphone\u003e\" endpoint",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "test-various-apis-of-customers-search-application;user-hits-get-method-to-get-specific-customer-information-with-phone-number;",
  "rows": [
    {
      "cells": [
        "phone"
      ],
      "line": 16,
      "id": "test-various-apis-of-customers-search-application;user-hits-get-method-to-get-specific-customer-information-with-phone-number;;1"
    },
    {
      "cells": [
        "8037602400"
      ],
      "line": 17,
      "id": "test-various-apis-of-customers-search-application;user-hits-get-method-to-get-specific-customer-information-with-phone-number;;2"
    },
    {
      "cells": [
        "9972939567"
      ],
      "line": 18,
      "id": "test-various-apis-of-customers-search-application;user-hits-get-method-to-get-specific-customer-information-with-phone-number;;3"
    },
    {
      "cells": [
        "9995879555"
      ],
      "line": 19,
      "id": "test-various-apis-of-customers-search-application;user-hits-get-method-to-get-specific-customer-information-with-phone-number;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "user hits get method to get specific customer information with phone number",
  "description": "",
  "id": "test-various-apis-of-customers-search-application;user-hits-get-method-to-get-specific-customer-information-with-phone-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user hits baseUrl \"http://13.126.80.194:8080\" with \"api/v1/users/\" with \"8037602400\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "validate specific user information using phone \"8037602400\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://13.126.80.194:8080",
      "offset": 19
    },
    {
      "val": "api/v1/users/",
      "offset": 52
    },
    {
      "val": "8037602400",
      "offset": 73
    }
  ],
  "location": "Steps.user_hits_baseUrl_with_with_endpoint(String,String,String)"
});
formatter.result({
  "duration": 217767900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8037602400",
      "offset": 48
    }
  ],
  "location": "Steps.validate_specific_user_information_using_phone_endpoint(String)"
});
formatter.result({
  "duration": 787700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "user hits get method to get specific customer information with phone number",
  "description": "",
  "id": "test-various-apis-of-customers-search-application;user-hits-get-method-to-get-specific-customer-information-with-phone-number;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user hits baseUrl \"http://13.126.80.194:8080\" with \"api/v1/users/\" with \"9972939567\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "validate specific user information using phone \"9972939567\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://13.126.80.194:8080",
      "offset": 19
    },
    {
      "val": "api/v1/users/",
      "offset": 52
    },
    {
      "val": "9972939567",
      "offset": 73
    }
  ],
  "location": "Steps.user_hits_baseUrl_with_with_endpoint(String,String,String)"
});
formatter.result({
  "duration": 122261500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9972939567",
      "offset": 48
    }
  ],
  "location": "Steps.validate_specific_user_information_using_phone_endpoint(String)"
});
formatter.result({
  "duration": 848100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "user hits get method to get specific customer information with phone number",
  "description": "",
  "id": "test-various-apis-of-customers-search-application;user-hits-get-method-to-get-specific-customer-information-with-phone-number;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user hits baseUrl \"http://13.126.80.194:8080\" with \"api/v1/users/\" with \"9995879555\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "validate specific user information using phone \"9995879555\" endpoint",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://13.126.80.194:8080",
      "offset": 19
    },
    {
      "val": "api/v1/users/",
      "offset": 52
    },
    {
      "val": "9995879555",
      "offset": 73
    }
  ],
  "location": "Steps.user_hits_baseUrl_with_with_endpoint(String,String,String)"
});
formatter.result({
  "duration": 119599800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9995879555",
      "offset": 48
    }
  ],
  "location": "Steps.validate_specific_user_information_using_phone_endpoint(String)"
});
formatter.result({
  "duration": 856700,
  "status": "passed"
});
});