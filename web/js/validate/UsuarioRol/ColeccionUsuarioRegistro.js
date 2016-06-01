

function UsuarioRol_ColeccionUsuarioRegistro(tab){

    var prefijo = "urcur_";

    var urcur_agregar = document.getElementById( prefijo+'agregar' );
    urcur_agregar.addEventListener('click',
        function()
        {            
            urcu_agregar.click();   
        },
        false
    );
    // fin agregar


    var borrar = document.getElementById( prefijo+'borrar');
    borrar.addEventListener('click',
        function()
        {

            mostrarVentana('capa_clara');
            dimensionarVentana('capa_clara', 700, 150);

            var id = document.getElementById(prefijo+'id').value;
            AjaxPeticion( '../UsuarioRol/Collection/Usuario/Eliminar.do?id='+id,
                'capa_clara' );

            UsuarioRol_ColeccionUsuarioEliminar(tab);


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
