

function UsuarioRol_ColeccionRolRegistro(tab){

    var prefijo = "urcrr_";

    var agregar = document.getElementById( prefijo+'agregar' );
    agregar.addEventListener('click',
        function()
        {

            mostrarVentana('capa_oscura');
            mostrarVentana('capa_clara');
            dimensionarVentana('capa_clara', 800, 150);

            AjaxPeticion( '../UsuarioRol/Collection/Rol/Agregar.do' , 'capa_clara' );
            asignarValor( 'ura_usuario',  document.getElementById('ur_usuario').value );

            UsuarioRol_ColeccionRolAgregar(tab);
        },
        false
    );
    // fin agregar




    var borrar = document.getElementById( prefijo+'borrar');
    borrar.addEventListener('click',
        function()
        {

            mostrarVentana('capa_clara');
            dimensionarVentana('capa_clara', 800, 150);

            var id = document.getElementById(prefijo+'id').value;
            AjaxPeticion( '../UsuarioRol/Collection/Rol/Eliminar.do?id='+id,
                'capa_clara' );

            UsuarioRol_ColeccionRolEliminar(tab);




            /*
            var cre_aceptar = document.getElementById('cre_aceptar');
            cre_aceptar.addEventListener('click',
                function()
                {
                        javascript:document.cre_form_detele.submit();
                },
                false
            );

            var cre_cerrar = document.getElementById('cre_cerrar');
            cre_cerrar.addEventListener('click',
                function()
                {
                    ocultarVentana('capa_oscura');
                    ocultarVentana('capa_clara');
                },
                false
            );
            */






        },
        false
    );
    // fin borrar


    var cerrar = document.getElementById( prefijo+'cerrar');
    cerrar.addEventListener('click',
        function()
        {
            ocultarVentana('capa_oscura');
            ocultarVentana('capa_busqueda');
        },
        false
    );
    // fin cerrar

}
