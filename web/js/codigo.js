/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


    function recibirEnfoque(valor)
    {			
            document.getElementById(valor).className = "Enfoque";			
    }		

    function perderEnfoque(valor)
    {		
            document.getElementById(valor).className = "SinEnfoque";
    }



/*

.defaultInput
    {
     width: 100px;
     height:25px;
     padding: 5px;
    }

.error
{
 border:1px solid red;
}

<input type="text" class="defaultInput"/>
Jquery Code

$(document).ready({
  $('.defaultInput').focus(function(){
       $(this).addClass('error');
  });
});


*/
