package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)				
@CucumberOptions(features="features",glue={"stepDefinition"},plugin = {"html:cucumber-reports/html-report"})
public class Runner {

}
