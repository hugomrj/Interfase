

function campos_interaccion(prefijo)
{
     
    var nombre = document.getElementById( prefijo+'nombre' );        
    nombre.onfocus  = function() {                
        recibirEnfoque('i2');            
    };
    nombre.onblur  = function() {
        perderEnfoque('i2');
    };
   

    var apellido = document.getElementById( prefijo+'apellido' );        
    apellido.onfocus  = function() {                
        recibirEnfoque('i3');            
    };
    apellido.onblur  = function() {
        perderEnfoque('i3');
    };
    
}





function validar_form(prefijo) 
{
    
    var nombre = document.getElementById( prefijo+"nombre") ;
    if (nombre.value.trim()=='') 
    {
        alerta_error('Falta agregar nombre del vendedor');
        nombre.focus();
        return false;
    }  
    
    
    
    
    return true;
    
}












