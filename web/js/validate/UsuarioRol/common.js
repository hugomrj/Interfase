




function usuariorol_campos_rol(prefijo)
{
//ura_rol

    var rol = document.getElementById( prefijo+'rol');  
    if (rol.value == ""){
        rol.value = 0;
    }       
    
    rol.onfocus  = function() {                
        recibirEnfoque('i2');            
    };
    rol.onblur  = function() {
        perderEnfoque('i2');        
        
        AjaxPeticion('../Rol/Mostrar/Nombre.do?valor='+this.value, 
                prefijo+'rol_nombre')
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



function usuariorol_campos_usuario(prefijo)
{
    var usuario = document.getElementById( prefijo+'usuario');  
    if (usuario.value == ""){
        usuario.value = 0;
    }       
    
    usuario.onfocus  = function() {                
        recibirEnfoque('i2');            
    };
    usuario.onblur  = function() {
        perderEnfoque('i2');        
        AjaxPeticion('../Usuario/Mostrar/Cuenta.do?valor='+this.value, prefijo+'usuario_nombre')
        zero( prefijo+'usuario' );
    };

    var qry_usuario = document.getElementById( prefijo+'qry_usuario');
    qry_usuario.addEventListener('click',
        function() 
        {   
            mostrarVentana('capa_oscura_segunda');
            mostrarVentana('capa_clara_segunda');
            dimensionarVentana('capa_clara_segunda', 600, 500);
            
            Busqueda_relacionada("Usuario", prefijo , prefijo+"usuario_nombre", "Cuenta");            

        }, 
        false
    );      

}



function usuariorol_validar_rol(prefijo) 
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


function usuariorol_validar_usuario(prefijo) 
{
    
    var usuario = document.getElementById( prefijo+"usuario") ;
    if (usuario.value.trim()=='0'  ) 
    {
        alerta_error('Falta agregar usuario');
        usuario.focus();
        return false;
    }  
        
    return true;
    
}














