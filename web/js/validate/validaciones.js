/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//Función que permite solo Números
function SoloNumeros() {
    if ((event.keyCode < 48) || (event.keyCode > 57)) 
    {
        event.returnValue = false;
    }
}

