

function RolInteraccion_ColeccionInteraccionRegistro(tab){

    var prefijo = "ricir_";

    var ricir_agregar = document.getElementById( prefijo+'agregar' );
    ricir_agregar.addEventListener('click',
        function()
        {   
            ricil_agregar.click();   
        },
        false
    );
    // fin agregar


    var ricir_borrar = document.getElementById( prefijo+'borrar');
    ricir_borrar.addEventListener('click',
        function()
        {

            mostrarVentana('capa_clara');
            dimensionarVentana('capa_clara', 700, 150);

            var id = document.getElementById(prefijo+'id').value;
            AjaxPeticion( '../RolInteraccion/Collection/Interaccion/Eliminar.do?id='+id,
                'capa_clara' );

           RolInteraccion_ColeccionInteraccionEliminar(tab);


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
