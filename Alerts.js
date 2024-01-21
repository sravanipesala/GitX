/* Alerts Demo */

describe('Protractor Alerts Demo', function()

{
   it('Open NonAngular js Website Alerts', function()
   {

    browser.waitForAngularEnabled(false);
    browser.get("http://qaclickacademy.com/practice.php");
    element(by.id("confirmbtn")).click();

    browser.switchTo().alert().dismiss().then(function()
    {
        browser.sleep(5000);
        
    })
  
//accept function is to click on 'ok/positive response' and dismiss function is to click on 'cancel/negative response' on a page


   })

})