



window.onload = function() {

    MensajesOnload();
    campos_interaccion("va_");

    var va_guardar = document.getElementById('va_guardar');
    va_guardar.addEventListener('click',
        function()
        {
            if (validar_form("va_"))
            {
                javascript:document.va_form.submit();
            }
        },
        false
    );

    
    var va_cancelar = document.getElementById('va_cancelar');
    va_cancelar.addEventListener('click',
        function()
        {
            window.location = "../Vendedor/Listar.do";
        },
        false
    );        


};
