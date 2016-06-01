

window.onload = function() {

    MensajesOnload();
    campos_interaccion("ue_");
    var Clase = "Usuario";

    var ue_aceptar = document.getElementById('ue_aceptar');
    ue_aceptar.addEventListener('click',
        function()
        {
            if (validar_form("ue_"))
            {                    
                var form = document.getElementById("ue_form");
                var accion =  form.getAttribute('action') ;
                AjaxPeticionURL(accion, getDataForm(form));
    
                if ( MensajeErrorCheck() )
                {
                    javascript:document.ue_form.submit();                    
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




    var ue_cancelar = document.getElementById('ue_cancelar');
    ue_cancelar.addEventListener('click',
        function() 
        {
            window.location = "../"+Clase+"/Filtrar.do?id="
                +(document.getElementById('ue_usuario').value)
                +"&pag=Registro.jspx";            
        }, 
        false
    );  



};
