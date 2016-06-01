
window.onload = function() {

    MensajesOnload();  
    
    var Clase = "Proveedor";
    var filtroID = "?id="+document.getElementById('pr_proveedor').value;
       
    var pr_agregar = document.getElementById('pr_agregar');
    pr_agregar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Agregar.jspx";
        },
        false
    );    
    
    var  editar = document.getElementById('pr_editar');
    editar.addEventListener('click',
        function()
        {            
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID
                +"&pag=Editar.jspx";
        },
        false
    );      
    
    var borrar = document.getElementById('pr_borrar');
    borrar.addEventListener('click',
        function()
        {    
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID
                +"&pag=Borrar.jspx";
        },
        false
    );      
    
    var listar = document.getElementById('pr_listar');
    listar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Listar.do";
        },
        false
    );       
   

};


















