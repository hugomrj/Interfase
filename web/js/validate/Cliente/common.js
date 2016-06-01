
function campos_interaccion(prefijo)
{

        var cedula = document.getElementById(prefijo+'cedula');
        if (cedula.value == ""){
            cedula.value = 0;
        }
        cedula.onfocus  = function() {
            recibirEnfoque('i2');
        };
        cedula.onblur  = function() {
            perderEnfoque('i2');
            zero( prefijo+'cedula');
        };
        cedula.onkeyup  = function() {
             formatoNumero(cedula);
        };


        var nombre = document.getElementById(prefijo+'nombre');
        nombre.onfocus  = function() {
            recibirEnfoque('i3');
        };
        nombre.onblur  = function() {
            perderEnfoque('i3');
        };


        var apellido = document.getElementById(prefijo+'apellido');
        apellido.onfocus  = function() {
            recibirEnfoque('i4');
        };
        apellido.onblur  = function() {
            perderEnfoque('i4');
        };


        var email = document.getElementById(prefijo+'email');
        email.onfocus  = function() {
            recibirEnfoque('i5');
        };
        email.onblur  = function() {
            perderEnfoque('i5');
        };


        var direccion = document.getElementById(prefijo+'direccion');
        direccion.onfocus  = function() {
            recibirEnfoque('i6');
        };
        direccion.onblur  = function() {
            perderEnfoque('i6');
        };


        var telefono = document.getElementById(prefijo+'telefono');
        telefono.onfocus  = function() {
            recibirEnfoque('i7');
        };
        telefono.onblur  = function() {
            perderEnfoque('i7');
        };


        var celular = document.getElementById(prefijo+'celular');
        celular.onfocus  = function() {
            recibirEnfoque('i8');
        };
        celular.onblur  = function() {
            perderEnfoque('i8');
        };


        var ruc = document.getElementById(prefijo+'ruc');
        ruc.onfocus  = function() {
            recibirEnfoque('i9');
        };
        ruc.onblur  = function() {
            perderEnfoque('i9');
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
