

window.onload = function() {
        
    MensajesOnload();  
            
    var Clase = "Producto";
    campos_interaccion("pe_");
    formato_load("pe_"); 
    
    var filtroID = "?id="+document.getElementById('pe_producto').value;

    
    var pe_aceptar = document.getElementById('pe_aceptar');
    pe_aceptar.addEventListener('click',
        function()
        {
            if (validar_form("pe_"))
            {                    
                var form = document.getElementById("pe_form");
                var accion =  form.getAttribute('action') ;
                AjaxPeticionURL(accion, getDataForm(form));
    
                if ( MensajeErrorCheck() )
                {
                    javascript:document.pe_form.submit();                    
                }
                else
                {
                    MensajesOnload();                    
                }
                Mensaje.contenido = "";               
                
            }
            
        },
        false
    );




    var pe_cancelar = document.getElementById('pe_cancelar');
    pe_cancelar.addEventListener('click',
        function() 
        {
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID 
                +"&pag=Registro.jspx";            
        }, 
        false
    );  

                                        
};


