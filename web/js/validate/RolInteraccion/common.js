

function rolinteraccion_campos_interaccion(prefijo)
{


    var interaccion = document.getElementById( prefijo+'interaccion');  
    if (interaccion.value == ""){
        interaccion.value = 0;
    }       
    
    interaccion.onfocus  = function() {                
        recibirEnfoque('i2');            
    };
    interaccion.onblur  = function() {
        perderEnfoque('i2');        
        AjaxPeticion('../Interaccion/Mostrar/Nombre.do?valor='+this.value,  prefijo+'interaccion_nombre')
        zero( prefijo+'interaccion' );
    };

    var qry_interaccion = document.getElementById( prefijo+'qry_interaccion');
    qry_interaccion.addEventListener('click',
        function() 
        {   
    
            mostrarVentana('capa_oscura_segunda');
            mostrarVentana('capa_clara_segunda');
            dimensionarVentana('capa_clara_segunda', 700, 500);
            
            Busqueda_relacionada("Interaccion", prefijo , prefijo+"interaccion_nombre", "Nombre");            

        }, 
        false
    );  

}



function rolinteraccion_validar_interaccion(prefijo) 
{
    
    var interaccion = document.getElementById( prefijo+"interaccion") ;
    if (interaccion.value.trim()=='0'  ) 
    {
        alerta_error('Falta agregar interaccion');
        interaccion.focus();
        return false;
    }  
        
    return true;
    
}




function rolinteraccion_campos_rol(prefijo)
{

    var rol = document.getElementById( prefijo+'rol');  
    if (rol.value == ""){
        rol.value = 0;
    }       
    
    rol.onfocus  = function() {                
        recibirEnfoque('i2');            
    };
    rol.onblur  = function() {
        perderEnfoque('i2');        
        AjaxPeticion('../Rol/Mostrar/Nombre.do?valor='+this.value,  prefijo+'rol_nombre')
        zero( prefijo+'rol' );
    };

    var qry_rol = document.getElementById( prefijo+'qry_rol');
    qry_rol.addEventListener('click',
        function() 
        {   
    
            mostrarVentana('capa_oscura_segunda');
            mostrarVentana('capa_clara_segunda');
            dimensionarVentana('capa_clara_segunda', 700, 500);
            
            Busqueda_relacionada("Rol", prefijo , prefijo+"rol_nombre", "Nombre");            

        }, 
        false
    );  

}



function rolinteraccion_validar_rol(prefijo) 
{
    
    var rol = document.getElementById( prefijo+"rol") ;
    if (rol.value.trim()=='0'  ) 
    {
        alerta_error('Falta agregar rol');
        rol.focus();
        return false;
    }  
        
    return true;
    
}










