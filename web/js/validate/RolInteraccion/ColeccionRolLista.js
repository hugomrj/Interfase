

function RolInteraccion_ColeccionRolLista(tab, cabecera){
        
    
     
    var tabla = 'tabla_rol_interaccion_coleccion_rol';

    var vinculo_coleccion = '../RolInteraccion/Collection/Rol';
    var prefijo = "rlcrr_" ;
    
    var funcionAnonima = "RolInteraccion_ColeccionRolRegistro("+tab+");" ;

    sub_tabla_tab (tabla, tab, vinculo_coleccion, prefijo, cabecera,
            funcionAnonima, 700, 200 );


    var rlcrr_agregar = document.getElementById(prefijo+'agregar');
    rlcrr_agregar.addEventListener('click',
        function() {

            mostrarVentana('capa_oscura');
            mostrarVentana('capa_clara');
            dimensionarVentana('capa_clara', 700, 150);

            AjaxPeticion( '../RolInteraccion/Collection/Rol/Agregar.do' , 'capa_clara' );

            asignarValor( 'ricra_interaccion',  document.getElementById('ir_interaccion').value );

            RolInteraccion_ColeccionRolAgregar(tab);

        },
        false
    );

}
