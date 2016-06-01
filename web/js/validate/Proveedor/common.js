

function campos_interaccion(prefijo)
{
     
    var nombre = document.getElementById( prefijo+'nombre' );        
    nombre.onfocus  = function() {                
        recibirEnfoque('i2');            
    };
    nombre.onblur  = function() {
        perderEnfoque('i2');
    };
   

    var direccion = document.getElementById( prefijo+'direccion' );        
    direccion.onfocus  = function() {                
        recibirEnfoque('i3');            
    };
    direccion.onblur  = function() {
        perderEnfoque('i3');
    };


    var telefono = document.getElementById( prefijo+'telefono' );        
    telefono.onfocus  = function() {                
        recibirEnfoque('i4');            
    };
    telefono.onblur  = function() {
        perderEnfoque('i4');
    };
    

    var telefono = document.getElementById( prefijo+'telefono' );        
    telefono.onfocus  = function() {                
        recibirEnfoque('i4');            
    };
    telefono.onblur  = function() {
        perderEnfoque('i4');
    };
        
    var ruc = document.getElementById( prefijo+'ruc' );        
    ruc.onfocus  = function() {                
        recibirEnfoque('i5');            
    };
    ruc.onblur  = function() {
        perderEnfoque('i5');
    };    
    
    
}





function validar_form(prefijo) 
{
    
    var nombre = document.getElementById( prefijo+"nombre") ;
    if (nombre.value.trim()=='') 
    {
        alerta_error('Falta agregar nombre del proveedor');
        nombre.focus();
        return false;
    }  
    
    
    return true;
    
}












