/*
Chain Locators
*/
describe('Chain locators demo', function() {
	
    it('Repeater',function ()
    {
       
        browser.get('http://juliemr.github.io/protractor-demo/')  ;
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("9");
        element(by.id("gobutton")).click();
       element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
        {
            console.log(text); 
        })

       /* element(by.model("operator")).element(by.css("option:nth-child(4)")).click()
        {
            console.log(text); 
        })*/


        //first element is parent and second element is child
   
})
})
