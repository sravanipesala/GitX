/* Window Handles Demo */

describe("Window Handles Demo ", function()
{

    it('Open  practise website',function()
    {
        browser.get('https://posse.com/');

    
        
            browser.getTitle().then(function(title)
            {

                console.log(title+" is title of the page before switching ");
            }
            )
            browser.getAllWindowHandles().then(function(handles)
            {

                
                browser.switchTo().window(handles[1]);
                browser.getTitle().then(function(title)
                {

                    console.log(title+" is title of the page after switching ");
                }
                )
                browser.switchTo().window(handles[0]);
                browser.getTitle().then(function(title)
                {

                    console.log(title+" is title of the page at 3rd time ");
                }
                )
                
            }
            )
            
            browser.sleep(10000);
            

        })
    })

