
window.onload = function() {

    MensajesOnload();

    var filtroID = "?id="+document.getElementById('ur_usuario').value;
    
    
    var ur_agregar = document.getElementById('ur_agregar');
    ur_agregar.addEventListener('click',
        function()
        {
            window.location = '../Usuario/Agregar.jspx';
        },
        false
    );    
    
    
    var ur_editar = document.getElementById('ur_editar');
    ur_editar.addEventListener('click',
        function()
        {            
            window.location = "../Usuario/Filtrar.do"
                +filtroID
                +"&pag=Editar.jspx";
        },
        false
    );      
    
    
    var ur_borrar = document.getElementById('ur_borrar');
    ur_borrar.addEventListener('click',
        function()
        {    
            window.location = "../Usuario/Filtrar.do"
                +filtroID
                +"&pag=Borrar.jspx";
        },
        false
    );      
    
    
    var ur_listar = document.getElementById('ur_listar');
    ur_listar.addEventListener('click',
        function()
        {
            window.location = "../Usuario/Listar.do";
        },
        false
    );       
    
    
       
    

    var a_rol_tab = document.getElementById('a_rol_tab');
    a_rol_tab.onclick  = function() {

        AjaxPeticion('../UsuarioRol/Collection/Rol/Listar.do?jsp=urcr_&usuario='
            +document.getElementById('ur_usuario').value
            +'&page=1','tab_body');

        UsuarioRol_ColeccionRol(1);

    };


    var val_tab  = AjaxServlet('../GetTab');    
    if (val_tab == 1)
    {
        a_rol_tab.click();
    }


};
