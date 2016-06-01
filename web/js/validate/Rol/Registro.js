
window.onload = function() {

    MensajesOnload();

    var valorid = document.getElementById('rr_rol').value;
    var cabecera = "&rol="+valorid;
            
    var rr_agregar = document.getElementById('rr_agregar');
    rr_agregar.addEventListener('click',
        function()
        {
            window.location = '../Rol/Agregar.jspx';
        },
        false
    );    
    
    
    var rr_editar = document.getElementById('rr_editar');
    rr_editar.addEventListener('click',
        function()
        {            
            window.location = "../Rol/Filtrar.do"
                +"?id="+document.getElementById('rr_rol').value
                +"&pag=Editar.jspx";
        },
        false
    );      
    
    
    var rr_borrar = document.getElementById('rr_borrar');
    rr_borrar.addEventListener('click',
        function()
        {    
            window.location = "../Rol/Filtrar.do"
                +"?id="+document.getElementById('rr_rol').value
                +"&pag=Borrar.jspx";
        },
        false
    );      
    
    
    var rr_listar = document.getElementById('rr_listar');
    rr_listar.addEventListener('click',
        function()
        {
            window.location = "../Rol/Listar.do";
        },
        false
    );       
        

        
    var a_usuario_tab = document.getElementById('a_usuario_tab');
    a_usuario_tab.onclick  = function() {

        AjaxPeticion('../UsuarioRol/Collection/Usuario/Listar.do?jsp=urcu_'
            +cabecera
            +'&page=1','tab_body');

        UsuarioRol_ColeccionUsuarioLista(1, cabecera);

    };


    var a_interaccion_tab = document.getElementById('a_interaccion_tab');
    a_interaccion_tab.onclick  = function() {

        AjaxPeticion('../RolInteraccion/Collection/Interaccion/Listar.do?jsp=ricil_'
            +cabecera
            +'&page=1','tab_body');
                
        RolInteraccion_ColeccionInteraccionLista(2, cabecera);

    };



    var val_tab  = AjaxServlet('../GetTab');
    if (val_tab == 1)
    {
        a_usuario_tab.click();
    }
    if (val_tab == 2)
    {
        a_interaccion_tab.click();
    }






};
