


window.onload = function() {

    MensajesOnload();
    campos_interaccion("ua_");


    var ua_guardar = document.getElementById('ua_guardar');
    ua_guardar.addEventListener('click',
        function()
        {
            if (validar_form("ua_"))
            {
                javascript:document.ua_form.submit();
            }
        },
        false
    );


    var ua_cancelar = document.getElementById('ua_cancelar');
    ua_cancelar.addEventListener('click',
        function()
        {
            window.location = "../Usuario/Listar.do";
        },
        false
    );    


};
