

function RolInteraccion_ColeccionRolEliminar(tab){

        prefijo = "ricre_";
                
        var ricre_aceptar = document.getElementById( prefijo+ 'aceptar');
        ricre_aceptar.addEventListener('click',
            function()
            {

                var form = document.getElementById( prefijo + "form");
                var accion =  form.getAttribute('action') ;
                AjaxPeticionURL(accion, getDataForm(form));

                if ( MensajeErrorCheck() )
                {
                    AjaxServlet('../SetTab?val='+tab);
                    ricre_cerrar.click();
                    a_rol_tab.click();                    
                    MensajesOnload();
                }
                else
                {
                    MensajesOnload();
                }
                Mensaje.contenido = "";


            },
            false
        );

        var ricre_cerrar = document.getElementById( prefijo+'cerrar');
        ricre_cerrar.addEventListener('click',
            function()
            {
                ocultarVentana('capa_oscura');
                ocultarVentana('capa_clara');
            },
            false
        );


}
