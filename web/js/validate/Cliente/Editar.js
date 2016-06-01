

window.onload = function() {

    MensajesOnload(); 
    var Clase = "Cliente";
    campos_interaccion("ce_");
    var filtroID = "?id="+document.getElementById('ce_cliente').value;

    
    var ce_aceptar = document.getElementById('ce_aceptar');
    ce_aceptar.addEventListener('click',
        function()
        {
            if (validar_form("ce_"))
            {                    
                var form = document.getElementById("ce_form");
                var accion =  form.getAttribute('action') ;
                AjaxPeticionURL(accion, getDataForm(form));
    
                if ( MensajeErrorCheck() )
                {
                    javascript:document.ce_form.submit();                    
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


    var ce_cancelar = document.getElementById('ce_cancelar');
    ce_cancelar.addEventListener('click',
        function() 
        {
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID 
                +"&pag=Registro.jspx";            
        }, 
        false
    );  


};
