

function campos_interaccion(prefijo)
{
     
    var cuenta = document.getElementById( prefijo+'cuenta' );        
    cuenta.onfocus  = function() {                
        recibirEnfoque('i2');            
    };
    cuenta.onblur  = function() {
        perderEnfoque('i2');
    };
   

    var pass = document.getElementById( prefijo+'pass' );        
    pass.onfocus  = function() {                
        recibirEnfoque('i3');            
    };
    pass.onblur  = function() {
        perderEnfoque('i3');
    };

    
}





function validar_form(prefijo) 
{
    
    var cuenta = document.getElementById( prefijo+"cuenta") ;
    if (cuenta.value.trim()=='') 
    {
        alerta_error('Falta agregar usuario');
        cuenta.focus();
        return false;
    }  
        
    return true;
    
}












