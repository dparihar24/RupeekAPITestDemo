package stepDefinition;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Steps {
	
	public Response response=null;
	String responseBody = "";
	JSONObject jsonObj = null;
	JSONParser parser = null;
	public static String token="";
	
	@Given("^user hits \"([^\"]*)\" endpoint$")
	public void user_hits_A_firstEndpoint(String baseUrl) throws Throwable {
	RestAssured.baseURI =baseUrl;
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
    
    System.out.println(response.asString());
   }
	
	@Then("^parse the response and get the toekn$")
	public void user_hits_B_response_and_get_the_toekn() throws Throwable {
	    
		responseBody = response.getBody().asString();
		parser = new JSONParser();
		jsonObj = (JSONObject) parser.parse(responseBody);
		token=jsonObj.get("token").toString();
	}
	
	
	@Given("^user hits baseUrl \"([^\"]*)\" with \"([^\"]*)\" endpoint$")
	public void user_hits_C_Second_endpoint(String baseUrl, String endPoint) throws Throwable {
		RestAssured.baseURI = baseUrl;
		RequestSpecification httpRequest = RestAssured.given().header("Authorization","Bearer "+Steps.token);
		response = httpRequest.get("/" + endPoint);
		
		System.out.println(response.asString());
		
		
	}
	

}
