

function UsuarioRol_ColeccionUsuarioEliminar(tab){

        prefijo = "urcue_";

        var aceptar = document.getElementById( prefijo+ 'aceptar');
        aceptar.addEventListener('click',
            function()
            {

                var form = document.getElementById( prefijo + "form");
                var accion =  form.getAttribute('action') ;
                AjaxPeticionURL(accion, getDataForm(form));

                if ( MensajeErrorCheck() )
                {
                    AjaxServlet('../SetTab?val='+tab);
                    urcue_cerrar.click();
                    a_usuario_tab.click();
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

        var urcue_cerrar = document.getElementById( prefijo+'cerrar');
        urcue_cerrar.addEventListener('click',
            function()
            {
                ocultarVentana('capa_oscura');
                ocultarVentana('capa_clara');
            },
            false
        );


}
