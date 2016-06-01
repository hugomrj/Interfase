

function campos_interaccion(prefijo)
{

    var nombre = document.getElementById( prefijo+'nombre' );
    nombre.onfocus  = function() {
        recibirEnfoque('i2');
    };
    nombre.onblur  = function() {
        perderEnfoque('i2');
    };


}





function validar_form(prefijo)
{

    var nombre = document.getElementById( prefijo+"nombre") ;
    if (nombre.value.trim()=='')
    {
        alerta_error('Falta agregar descripcion');
        nombre.focus();
        return false;
    }

    return true;

}
