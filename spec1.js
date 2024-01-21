describe('Protractor baby steps', function() {
	
	
	
	it('Open angular js website ', function () {
		
		browser.get("https://angularjs.org");
	    browser.get('http://juliemr.github.io/protractor-demo/').then(function ()
		{
			console.log("I am the last step to execute");
		})
	 //   browser.sleep(9000);
		

		
	})
	
	it('close browser', function() {
		
		//write second test case to close browser
		
		
	})

	
 })


//write first test case of your raw protractor code	to open website
//browser is a global object - will choose chrome browwer by default



//browser.get will hit url on the browser
//each it block will be called as a spec
//first parameter - Test suite name 
//second paramater - function will have all tests (IT blocks)



