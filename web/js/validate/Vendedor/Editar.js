
window.onload = function() {
    
    MensajesOnload(); 
    var Clase = "Vendedor";
    campos_interaccion("ve_");
    var filtroID = "?id="+document.getElementById('ve_vendedor').value;

    
    var ve_aceptar = document.getElementById('ve_aceptar');
    ve_aceptar.addEventListener('click',
        function()
        {
            if (validar_form("ve_"))
            {                    
                var form = document.getElementById("ve_form");
                var accion =  form.getAttribute('action') ;
                AjaxPeticionURL(accion, getDataForm(form));
    
                if ( MensajeErrorCheck() )
                {
                    javascript:document.ve_form.submit();                    
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




    var ve_cancelar = document.getElementById('ve_cancelar');
    ve_cancelar.addEventListener('click',
        function() 
        {
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID 
                +"&pag=Registro.jspx";            
        }, 
        false
    );  

    

                                        
};
