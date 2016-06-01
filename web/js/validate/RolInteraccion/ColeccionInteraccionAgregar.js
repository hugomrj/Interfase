


function RolInteraccion_ColeccionInteraccionAgregar(tab){

    prefijo = "ricia_";
    rolinteraccion_campos_interaccion( prefijo );
        
    var agregar = document.getElementById( prefijo+'agregar' );
    agregar.addEventListener('click',
        function() 
        {
               
            if (rolinteraccion_validar_interaccion( prefijo ))
            {

                var form = document.getElementById( prefijo+"form");            
                var accion =  form.getAttribute('action') ; 
                AjaxPeticionURL(accion, getDataForm(form));

                if ( MensajeErrorCheck() )
                {                                
                    AjaxServlet('../SetTab?val='+tab);
                    ricia_cerrar.click();                 
                    a_interaccion_tab.click();
                    MensajesOnload();                
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

 

    var ricia_cerrar = document.getElementById( prefijo+'cerrar');
    ricia_cerrar.addEventListener('click',
        function() 
        {                        
            ocultarVentana('capa_oscura');
            ocultarVentana('capa_clara');        
        }, 
        false
    );  
    
    
    
    
    
}