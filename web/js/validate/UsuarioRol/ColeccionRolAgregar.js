


function UsuarioRol_ColeccionRolAgregar(tab){

    usuariorol_campos_rol("ura_");
        
    var ura_agregar = document.getElementById('ura_agregar');
    ura_agregar.addEventListener('click',
        function() 
        {
                     
            if (usuariorol_validar_rol("ura_"))
            {
                var form = document.getElementById("ura_form");            
                var accion =  form.getAttribute('action') ; 
                AjaxPeticionURL(accion, getDataForm(form));

                if ( MensajeErrorCheck() )
                {                                
                    AjaxServlet('../SetTab?val='+tab);
                    ura_cerrar.click();                 
                    a_rol_tab.click();
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

 

    var ura_cerrar = document.getElementById('ura_cerrar');
    ura_cerrar.addEventListener('click',
        function() 
        {                        
            ocultarVentana('capa_oscura');
            ocultarVentana('capa_clara');        
        }, 
        false
    );  
    
    
    
    
    
}