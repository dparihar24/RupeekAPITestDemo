package stepDefinition;

import static org.junit.Assert.assertThat;

import org.hamcrest.Matchers;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Steps {

	public Response response = null;
	String responseBody = "";
	JSONObject jsonObj = null;
	JSONArray jsonArray = null;
	JSONParser parser = null;
	public static String token = "";

	@Given("^user hits \"([^\"]*)\" endpoint$")
	public void hitPostMethod(String baseUrl) throws Throwable {
		RestAssured.baseURI = baseUrl;
		RequestSpecification request = RestAssured.given();

		JSONObject requestParams = new JSONObject();
		requestParams.put("username", "rupeek");
		requestParams.put("password", "password");
		// Add a header stating the Request body is a JSON
		request.header("Content-Type", "application/json");

		// Add the Json to the body of the request
		request.body(requestParams.toJSONString());

		// Post the request and check the response
		response = request.post("/authenticate");
		// status code validation
		System.out.println(response.getStatusCode());
		assertThat("Check if response giving 200 status code after hitting post Method",
				response.getStatusCode() == 200, Matchers.equalTo(true));

	}

	@Then("^parse the response and get the toekn$")
	public void parseResponseToGetToken() throws Throwable {

		responseBody = response.getBody().asString();
		parser = new JSONParser();
		jsonObj = (JSONObject) parser.parse(responseBody);
		token = jsonObj.get("token").toString();
	}

	@Given("^user hits baseUrl \"([^\"]*)\" with \"([^\"]*)\" endpoint$")
	public void hitGetMethodToGetUsersInfo(String baseUrl, String endPoint) throws Throwable {
		RequestSpecification httpRequest = RestAssured.given().header("Authorization", "Bearer " + Steps.token);
		response = httpRequest.get("/" + endPoint);
	}

	@Then("^parse the users api response to perform various validations$")
	public void parse_the_users_api_response_to_perform_various_validations() throws Throwable {
		// status code validation
		assertThat("Check if response giving 200 status code after hitting get Method", response.getStatusCode() == 200,
				Matchers.equalTo(true));

		responseBody = response.getBody().asString();
		parser = new JSONParser();
		jsonArray = (JSONArray) parser.parse(responseBody);

		// header attribute validation
		assertThat("Check if header contains expected content type",
				response.header("Content-Type").toString().equals("application/json;charset=UTF-8"),
				Matchers.equalTo(true));
		assertThat("Check if header contains expected Transfer-Encoding",
				response.header("Transfer-Encoding").toString().equals("chunked"), Matchers.equalTo(true));
		assertThat("Check if header contains expected X-Frame-Options",
				response.header("X-Frame-Options").toString().equals("DENY"), Matchers.equalTo(true));

		// no of user records validation expected 3
		assertThat("Check if response contains all 3 users information or not", jsonArray.size() == 3,
				Matchers.equalTo(true));

		// validation for attribute contains or not
		for (int i = 0; i < jsonArray.size(); i++) {
			jsonObj = (JSONObject) jsonArray.get(i);

			assertThat("Check if response contains first_name", jsonObj.containsKey("first_name"),
					Matchers.equalTo(true));
			assertThat("Check if response contains last_name", jsonObj.containsKey("last_name"),
					Matchers.equalTo(true));
			assertThat("Check if response contains career", jsonObj.containsKey("career"), Matchers.equalTo(true));
			assertThat("Check if response contains phone", jsonObj.containsKey("phone"), Matchers.equalTo(true));

			// attribute null validation

			assertThat("Validate first_name is empty or not", jsonObj.get("first_name").toString().isEmpty(),
					Matchers.equalTo(false));
			assertThat("Validate last_name is empty or not", jsonObj.get("last_name").toString().isEmpty(),
					Matchers.equalTo(false));
			assertThat("Validate career is empty or not", jsonObj.get("career").toString().isEmpty(),
					Matchers.equalTo(false));
			assertThat("Validate phone is empty or not", jsonObj.get("phone").toString().isEmpty(),
					Matchers.equalTo(false));
		}
	}

	@Given("^user hits baseUrl \"([^\"]*)\" with \"([^\"]*)\" with \"([^\"]*)\" endpoint$")
	public void user_hits_baseUrl_with_with_endpoint(String baseUrl, String param1, String param2) throws Throwable {
		RequestSpecification httpRequest = RestAssured.given().header("Authorization", "Bearer " + Steps.token);
		response = httpRequest.get("/" + param1 + param2);
	}

	@Then("^validate specific user information using phone \"([^\\\"]*)\" endpoint$")
	public void validate_specific_user_information_using_phone_endpoint(String phone) throws Throwable {
		responseBody = response.getBody().asString();
		parser = new JSONParser();
		jsonObj = (JSONObject) parser.parse(responseBody);

		// status code validation
		assertThat("Check if response giving 200 status code after hitting get Method", response.getStatusCode() == 200,
				Matchers.equalTo(true));

		// validation if response contains expected phone
		assertThat("Validate if response contains expected phone number", jsonObj.get("phone").toString().equals(phone),
				Matchers.equalTo(true));
		assertThat("Check if response contains first_name", jsonObj.containsKey("first_name"), Matchers.equalTo(true));
		assertThat("Check if response contains last_name", jsonObj.containsKey("last_name"), Matchers.equalTo(true));
		assertThat("Check if response contains career", jsonObj.containsKey("career"), Matchers.equalTo(true));

		assertThat("Validate first_name is empty or not", jsonObj.get("first_name").toString().isEmpty(),
				Matchers.equalTo(false));
		assertThat("Validate last_name is empty or not", jsonObj.get("last_name").toString().isEmpty(),
				Matchers.equalTo(false));
		assertThat("Validate career is empty or not", jsonObj.get("career").toString().isEmpty(),
				Matchers.equalTo(false));
		assertThat("Validate phone is empty or not", jsonObj.get("phone").toString().isEmpty(),
				Matchers.equalTo(false));
	}

}
