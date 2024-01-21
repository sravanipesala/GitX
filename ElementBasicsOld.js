/*

*/



describe('Protractor Element Demo', function() {
	
    it('Locators',function ()
    {
       
     //browser.get("http://google.com"); //non-angular page
     browser.get('http://juliemr.github.io/protractor-demo/')  ;
     element(by.model("first")).sendKeys("3");
     element(by.model("second")).sendKeys("5");
     element(by.id("gobutton")).click();

     //tagname[attribute='value']

     //jasmine takes care of resolving promises 

     expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");

     element(by.css("h2[class='ng-binding']")).getText().then(function(text){
        console.log(text);
        browser.sleep(10000);

     })
       

     
    //real output will display only when you resolve promise
    //protractor for 90% of methods will resolve promise automatically
    //there could be 2 potential problems ... 1. sequence is not guaranteed

})
})