
 
 describe('Protractor Element Demo',function() {
	

    var using = require('jasmine-data-provider');
    var obj = require("./Jsobjectdemo.js");
    var d = require("./data.js");


    beforeEach(function(){

        //pre-requisite function launch browser
   
    obj.getURL();

    });

    //data stores actual data
    //description stores sub object name
    //for every iteration  one data set is picked

    using(d.Datadriven, function (data, description)
     {
        it('Testing Calculator Functionality '+description,function ()
        {
    
         obj.firstinput.sendKeys(data.firstinput);
         obj.secondinput.sendKeys(data.secondinput);
         obj.goButton.click();
    
         //tagname[attribute='value']
    
         //jasmine takes care of resolving promises 
    
         expect(obj.result.getText()).toBe(data.result);
    
         obj.result.getText().then(function(text){
            console.log(text);
            browser.sleep(3000);
    
         })
        })

    });

    afterEach(function(){
    
        //pre-requisite function launch browser
   
        console.log("Test is completed");
        console.log("Push from GitX");

    });

})
