

window.onload = function() {
        
    MensajesOnload();        
    
    var Clase = "Cliente";
    var filtroID = "?id="+document.getElementById('cr_cliente').value;   
    
    var cr_agregar = document.getElementById('cr_agregar');
    cr_agregar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Agregar.jspx";
        },
        false
    );    
    
    
    var  cr_editar = document.getElementById('cr_editar');
    cr_editar.addEventListener('click',
        function()
        {            
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID
                +"&pag=Editar.jspx";
        },
        false
    );      
    
    
    var cr_borrar = document.getElementById('cr_borrar');
    cr_borrar.addEventListener('click',
        function()
        {    
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID
                +"&pag=Borrar.jspx";
        },
        false
    );      
    
    
    var cr_listar = document.getElementById('cr_listar');
    cr_listar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Listar.do";
        },
        false
    );       
    
    
};