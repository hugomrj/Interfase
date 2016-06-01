


function UsuarioRol_ColeccionUsuarioAgregar(tab){

    prefijo = "urcua_";
    usuariorol_campos_usuario( prefijo );
        
    var agregar = document.getElementById( prefijo+'agregar' );
    agregar.addEventListener('click',
        function() 
        {
               
            if (usuariorol_validar_usuario( prefijo ))
            {

                var form = document.getElementById( prefijo+"form");            
                var accion =  form.getAttribute('action') ; 
                AjaxPeticionURL(accion, getDataForm(form));

                if ( MensajeErrorCheck() )
                {                                
                    AjaxServlet('../SetTab?val='+tab);
                    cerrar.click();                 
                    a_usuario_tab.click();
                    alerta_info(Mensaje.contenido);                
                }
                else
                {                    
                    MensajesOnload();
                }            
                Mensaje.contenido = "";  

            }            
       
        }, 
        false
    );  

 

    var cerrar = document.getElementById( prefijo+'cerrar');
    cerrar.addEventListener('click',
        function() 
        {                        
            ocultarVentana('capa_oscura');
            ocultarVentana('capa_clara');        
        }, 
        false
    );  
    
    
    
    
    
}