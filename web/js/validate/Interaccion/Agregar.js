




window.onload = function() {

    MensajesOnload();
    campos_interaccion("ia_");



    var ia_guardar = document.getElementById('ia_guardar');
    ia_guardar.addEventListener('click',
        function()
        {

            if (validar_form("ia_"))
            {
                javascript:document.ia_form.submit();
            }

        },
        false
    );



};
