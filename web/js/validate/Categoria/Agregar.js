
window.onload = function() {
            
    MensajesOnload();  
    campos_interaccion("ca_");
        
    var ca_guardar = document.getElementById('ca_guardar');
    ca_guardar.addEventListener('click',
        function() 
        {
            if (validar_form("ca_"))
            {
                javascript:document.ca_form.submit();
            }            
        }, 
        false
    );  
    
    
    var ca_cancelar = document.getElementById('ca_cancelar');
    ca_cancelar.addEventListener('click',
        function()
        {
            window.location = "../Categoria/Listar.do";
        },
        false
    );        
    
    
                                        
}
