



window.onload = function() {

    MensajesOnload();
    campos_interaccion("ra_");


    var ra_guardar = document.getElementById('ra_guardar');
    ra_guardar.addEventListener('click',
        function()
        {
            if (validar_form("ra_"))
            {
                javascript:document.ra_form.submit();
            }
        },
        false
    );



    var ra_cancelar = document.getElementById('ra_cancelar');
    ra_cancelar.addEventListener('click',
        function()
        {
            window.location = "../Rol/Listar.do";
        },
        false
    );    




};
