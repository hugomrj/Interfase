



window.onload = function() {

    MensajesOnload();        
    
    var Clase = "Vendedor";
    var filtroID = "?id="+document.getElementById('vr_vendedor').value;
   
    
    var vr_agregar = document.getElementById('vr_agregar');
    vr_agregar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Agregar.jspx";
        },
        false
    );    
    
    
    var  vr_editar = document.getElementById('vr_editar');
    vr_editar.addEventListener('click',
        function()
        {            
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID
                +"&pag=Editar.jspx";
        },
        false
    );      
    
    
    var vr_borrar = document.getElementById('vr_borrar');
    vr_borrar.addEventListener('click',
        function()
        {    
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID
                +"&pag=Borrar.jspx";
        },
        false
    );      
    
    
    var vr_listar = document.getElementById('vr_listar');
    vr_listar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Listar.do";
        },
        false
    );       
    

};
