




window.onload = function() {

    MensajesOnload();
    campos_interaccion("pa_");



    var pa_guardar = document.getElementById('pa_guardar');
    pa_guardar.addEventListener('click',
        function()
        {

            if (validar_form("pa_"))
            {
                javascript:document.pa_form.submit();
            }

        },
        false
    );



    var pa_cancelar = document.getElementById('pa_cancelar');
    pa_cancelar.addEventListener('click',
        function()
        {
            window.location = "../Producto/Listar.do";
        },
        false
    );        



};
