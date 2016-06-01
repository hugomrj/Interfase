

function UsuarioRol_ColeccionUsuarioLista(tab, cabecera){

    
     //UsuarioRol_ColeccionUsuarioRegistro()

    var tabla = 'tabla_usuario_rol_coleccion_usuario';

    var vinculo_coleccion = '../UsuarioRol/Collection/Usuario';
    var prefijo = "urcu_" ;
    

    var funcionAnonima = "UsuarioRol_ColeccionUsuarioRegistro("+tab+");" ;

    sub_tabla_tab (tabla, tab, vinculo_coleccion, prefijo, cabecera,
            funcionAnonima, 700, 200 );

    var urcu_agregar = document.getElementById('urcu_agregar');
    urcu_agregar.addEventListener('click',
        function() {

            mostrarVentana('capa_oscura');
            mostrarVentana('capa_clara');
            dimensionarVentana('capa_clara', 700, 150);

            AjaxPeticion( '../UsuarioRol/Collection/Usuario/Agregar.do' , 'capa_clara' );

            asignarValor( 'urcua_rol',  document.getElementById('rr_rol').value );

            UsuarioRol_ColeccionUsuarioAgregar(tab);

        },
        false
    );

}
