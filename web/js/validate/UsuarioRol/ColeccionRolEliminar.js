

function UsuarioRol_ColeccionRolEliminar(tab){

        var urcre_aceptar = document.getElementById('urcre_aceptar');
        urcre_aceptar.addEventListener('click',
            function()
            {

                var form = document.getElementById("urcre_form");
                var accion =  form.getAttribute('action') ;
                AjaxPeticionURL(accion, getDataForm(form));

                if ( MensajeErrorCheck() )
                {
                    AjaxServlet('../SetTab?val='+tab);
                    urcre_cerrar.click();
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

        var urcre_cerrar = document.getElementById('urcre_cerrar');
        urcre_cerrar.addEventListener('click',
            function()
            {
                ocultarVentana('capa_oscura');
                ocultarVentana('capa_clara');
            },
            false
        );


}
