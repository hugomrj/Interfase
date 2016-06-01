

function RolInteraccion_ColeccionInteraccionEliminar(tab){

        prefijo = "ricie_";

        var ricie_aceptar = document.getElementById( prefijo+ 'aceptar');
        ricie_aceptar.addEventListener('click',
            function()
            {

                var form = document.getElementById( prefijo + "form");
                var accion =  form.getAttribute('action') ;
                AjaxPeticionURL(accion, getDataForm(form));

                if ( MensajeErrorCheck() )
                {
                    AjaxServlet('../SetTab?val='+tab);
                    ricie_cerrar.click();
                    a_interaccion_tab.click();
                    MensajesOnload();
                }
                else
                {
                    //alerta_error(Mensaje.contenido);
                    MensajesOnload();
                }
                Mensaje.contenido = "";


            },
            false
        );

        var ricie_cerrar = document.getElementById( prefijo+'cerrar');
        ricie_cerrar.addEventListener('click',
            function()
            {
                ocultarVentana('capa_oscura');
                ocultarVentana('capa_clara');
            },
            false
        );


}
