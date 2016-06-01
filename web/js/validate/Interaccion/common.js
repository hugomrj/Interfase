

function campos_interaccion(prefijo)
{
     
    var nombre = document.getElementById( prefijo+'nombre' );        
    nombre.onfocus  = function() {                
        recibirEnfoque('i2');            
    };
    nombre.onblur  = function() {
        perderEnfoque('i2');
    };
   
   
    
    var modulo = document.getElementById( prefijo+'modulo');  
    if (modulo.value == ""){
        modulo.value = 0;
    }       
    
    modulo.onfocus  = function() {                
        recibirEnfoque('i3');            
    };
    modulo.onblur  = function() {
        perderEnfoque('i3');
        AjaxPeticion('../Modulo/Mostrar/Descripcion.do?valor='+this.value,  prefijo+'modulo_descripcion') ;
        zero( prefijo+'modulo' );
    };
    
    
    
    
    var qry_modulo = document.getElementById( prefijo+'qry_modulo');
    qry_modulo.addEventListener('click',
        function() 
        {
            mostrarVentana('capa_oscura_segunda');
            mostrarVentana('capa_clara_segunda');
            dimensionarVentana('capa_clara_segunda', 700, 500);
            Busqueda_relacionada("Modulo", prefijo , prefijo+"modulo_descripcion", "Descripcion");            
        }, 
        false
    );            
    
   
   
    var url = document.getElementById( prefijo+'url' );        
    url.onfocus  = function() {                
        recibirEnfoque('i4');            
    };
    url.onblur  = function() {
        perderEnfoque('i4');
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
    
    
    var modulo = document.getElementById( prefijo+"modulo") ;
    if (modulo.value.trim()=='' || (modulo.value.trim()=='0') ) 
    {
        alerta_error('Falta agregar modulo');
        modulo.focus();
        return false;
    }      
    
    
    var url = document.getElementById( prefijo+"url") ;
    if (url.value.trim()=='') 
    {
        alerta_error('Falta agregar url');
        url.focus();
        return false;
    }      
    
    return true;
    
}












