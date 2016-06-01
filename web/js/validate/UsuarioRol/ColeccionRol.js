

function UsuarioRol_ColeccionRol(tab){

    var tabla = 'tabla_usuario_rol_coleccion';

    var vinculo_coleccion = '../UsuarioRol/Collection/Rol';
    var prefijo = "urcr_" ;
    var cabecera = "&usuario="+document.getElementById('ur_usuario').value
    var vinculo_listar = '';

    var funcionAnonima = "UsuarioRol_ColeccionRolRegistro("+tab+");"

    sub_tabla_tab (tabla, tab, vinculo_coleccion, prefijo, cabecera,
            funcionAnonima, 800, 200 );

    var agregar = document.getElementById('urcr_agregar');
    agregar.addEventListener('click',
        function() {

            mostrarVentana('capa_oscura');
            mostrarVentana('capa_clara');
            dimensionarVentana('capa_clara', 800, 150);

            AjaxPeticion( '../UsuarioRol/Collection/Rol/Agregar.do' , 'capa_clara' );
            asignarValor( 'ura_usuario',  document.getElementById('ur_usuario').value );

            UsuarioRol_ColeccionRolAgregar(tab);

        },
        false
    );

}
