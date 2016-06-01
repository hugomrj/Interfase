
window.onload = function() {

    MensajesOnload();
    
    var valorid = document.getElementById('ir_interaccion').value;
    var cabecera = "&interaccion="+valorid;
    var filtroid = "?id="+valorid;
            
            
    var ir_agregar = document.getElementById('ir_agregar');
    ir_agregar.addEventListener('click',
        function()
        {
            window.location = '../Interaccion/Agregar.jspx';
        },
        false
    );    
    
    
    var ir_editar = document.getElementById('ir_editar');
    ir_editar.addEventListener('click',
        function()
        {            
            window.location = "../Interaccion/Filtrar.do"
                +filtroid
                +"&pag=Editar.jspx";
        },
        false
    );      
    
    
    var ir_borrar = document.getElementById('ir_borrar');
    ir_borrar.addEventListener('click',
        function()
        {    
            window.location = "../Interaccion/Filtrar.do"
                +filtroid
                +"&pag=Borrar.jspx";
        },
        false
    );      
    
    
    var ir_listar = document.getElementById('ir_listar');
    ir_listar.addEventListener('click',
        function()
        {
            window.location = "../Interaccion/Listar.do";
        },
        false
    );       
            
            
            
            
    var a_rol_tab = document.getElementById('a_rol_tab');
    a_rol_tab.onclick  = function() {

        AjaxPeticion('../RolInteraccion/Collection/Rol/Listar.do?jsp=rlcrr_'
            +cabecera
            +'&page=1','tab_body');

        RolInteraccion_ColeccionRolLista(1, cabecera);

    };


    var val_tab  = AjaxServlet('../GetTab');    
    if (val_tab == 1)
    {
        a_rol_tab.click();
    }            
    
    

};
