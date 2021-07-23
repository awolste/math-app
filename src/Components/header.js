import React from 'react'
import Logo from '../images/logo.png'

export default function header() {

   function changeTheme(){
        var element = document.getElementById('box');
        console.log(element.className)		
        element.className == "candyBox" ?  (element.className = "candyBox2")  : (element.className = "candyBox");
        // var element = document.getElementById('awning');		
        // element.style.background === "#F2C4E6" ?  element.style.background = "#ACD4C9"  : (element.style.background = "#F2C4E6");

        var element = document.getElementById('awn');
        console.log(element.className)		
        element.className == "awning" ?  (element.className = "awning2")  : (element.className = "awning");
        
        var element = document.getElementById('set');
        console.log(element.className)		
        element.className == "submit" ?  (element.className = "submit2")  : (element.className = "submit");
        
        var element = document.getElementById('set2');
        console.log(element.className)		
        element.className == "submit" ?  (element.className = "submit2")  : (element.className = "submit");
        
        var element = document.getElementById('set3');
        console.log(element.className)		
        element.className == "submit" ?  (element.className = "submit2")  : (element.className = "submit");
        

        console.log(element.className)

   } 
    
    return (

        <div class="firstDiv">
            <div class="right-col">
                <button id="set3" className="submit" onClick= {changeTheme}>
                         change theme
                </button>
            </div>
            <img className="logoTop" alt="logo" src={Logo}/>
        </div>
    )
}