

function RolInteraccion_ColeccionInteraccionLista(tab, cabecera){
    
     //UsuarioRol_ColeccionUsuarioRegistro()

    var tabla = 'tabla_rol_interaccion_coleccion_interaccion';

    var vinculo_coleccion = '../RolInteraccion/Collection/Interaccion';
    var prefijo = "ricil_" ;
    
    var funcionAnonima = "RolInteraccion_ColeccionInteraccionRegistro("+tab+");" ;

    sub_tabla_tab (tabla, tab, vinculo_coleccion, prefijo, cabecera,
            funcionAnonima, 700, 200 );

    var ricil_agregar = document.getElementById(prefijo+'agregar');
    ricil_agregar.addEventListener('click',
        function() {

            mostrarVentana('capa_oscura');
            mostrarVentana('capa_clara');
            dimensionarVentana('capa_clara', 700, 150);

            AjaxPeticion( '../RolInteraccion/Collection/Interaccion/Agregar.do' , 'capa_clara' );

            asignarValor( 'ricia_rol',  document.getElementById('rr_rol').value );

            RolInteraccion_ColeccionInteraccionAgregar(tab);

        },
        false
    );

}
