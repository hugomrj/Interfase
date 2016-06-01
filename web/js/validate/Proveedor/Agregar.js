



window.onload = function() {

    MensajesOnload();
    campos_interaccion("pa_");
 
    var guardar = document.getElementById('pa_guardar');
    guardar.addEventListener('click',
        function() 
        {
            if (validar_form("pa_"))
            {
                javascript:document.pa_form.submit();
            }            
        }, 
        false
    );  
    
    
    var cancelar = document.getElementById('pa_cancelar');
    cancelar.addEventListener('click',
        function()
        {
            window.location = "../Proveedor/Listar.do";
        },
        false
    );   


};
