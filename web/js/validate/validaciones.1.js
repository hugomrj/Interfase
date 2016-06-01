
//Función que permite solo Números
function SoloNumeros() {
    if ((event.keyCode < 48) || (event.keyCode > 57)) 
    {
        event.returnValue = false;
    }
}






