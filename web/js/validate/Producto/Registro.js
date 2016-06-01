
window.onload = function() {
        
    MensajesOnload();
    formato_load("pr_");

    var Clase = "Producto";
    var filtroID = "?id="+document.getElementById('pr_producto').value;
   
        
    
    var pr_agregar = document.getElementById('pr_agregar');
    pr_agregar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Agregar.jspx";
        },
        false
    );    
    
    
    var  pr_editar = document.getElementById('pr_editar');
    pr_editar.addEventListener('click',
        function()
        {            
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID
                +"&pag=Editar.jspx";
        },
        false
    );      
    
    
    var pr_borrar = document.getElementById('pr_borrar');
    pr_borrar.addEventListener('click',
        function()
        {    
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID
                +"&pag=Borrar.jspx";
        },
        false
    );      
    
    
    var pr_listar = document.getElementById('pr_listar');
    pr_listar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Listar.do";
        },
        false
    );       
    


                                        
};


