function campos_interaccion(prefijo)
{
    
    var descripcion = document.getElementById( prefijo+'descripcion');        
    descripcion.onfocus  = function() {                
            recibirEnfoque('i2');            
    };
    descripcion.onblur  = function() {
            perderEnfoque('i2');
    };

}



function validar_form(prefijo)
{

    var cedula = document.getElementById( prefijo+"cedula") ;
    if ((cedula.value.trim()=='') || (cedula.value.trim()=='0'))
    {
        alerta_error('Error en valor de numero de cedula');
        cedula.focus();
        return false;
    }

    var nombre = document.getElementById( prefijo+"nombre") ;
    if ((nombre.value.trim()==''))
    {
        alerta_error('Error en valor de numero de cedula');
        nombre.focus();
        return false;
    }

    return true;

}




function validar_form(prefijo)
{
    var descripcion= document.getElementById( prefijo+"descripcion" ) ;
    if (descripcion.value.trim()==='') 
    {
        alerta_error('Falta agregar descripcion');
        return false;
    }   
    return true;
}

