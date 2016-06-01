

function RolInteraccion_ColeccionRolRegistro(tab){


    var prefijo = "ricrr_";

    
    var ricrr_agregar = document.getElementById( prefijo+'agregar' );
    ricrr_agregar.addEventListener('click',
        function()
        {   
            rlcrr_agregar.click();   
        },
        false
    );
    // fin agregar


    var ricrr_borrar = document.getElementById( prefijo+'borrar');
    ricrr_borrar.addEventListener('click',
        function()
        {
            mostrarVentana('capa_clara');
            dimensionarVentana('capa_clara', 700, 150);
            var id = document.getElementById(prefijo+'id').value;
            AjaxPeticion( '../RolInteraccion/Collection/Rol/Eliminar.do?id='+id,
                'capa_clara' );
           RolInteraccion_ColeccionRolEliminar(tab);
           
        },
        false
    );
    // fin borrar


    var ricrr_cerrar = document.getElementById( prefijo+'cerrar');
    ricrr_cerrar.addEventListener('click',
        function()
        {
            ocultarVentana('capa_oscura');
            ocultarVentana('capa_busqueda');
        },
        false
    );
    // fin cerrar

}
