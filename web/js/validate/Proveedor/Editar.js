

window.onload = function() {

    MensajesOnload(); 
    var Clase = "Proveedor";
    campos_interaccion("pe_");
    var filtroID = "?id="+document.getElementById('pe_proveedor').value;
    
    var aceptar = document.getElementById('pe_aceptar');
    aceptar.addEventListener('click',
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

    var cancelar = document.getElementById('pe_cancelar');
    cancelar.addEventListener('click',
        function() 
        {
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID 
                +"&pag=Registro.jspx";            
        }, 
        false
    );  


};



