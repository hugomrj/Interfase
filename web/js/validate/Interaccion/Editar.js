

window.onload = function() {

    MensajesOnload();
    campos_interaccion("ie_");

    var aceptar = document.getElementById('ie_aceptar');
    aceptar.addEventListener('click',
        function()
        {
            if (validar_form("ie_"))
            {
                javascript:document.ie_form.submit();
            }
        },
        false
    );


    var cancelar = document.getElementById('ie_cancelar');
    cancelar.addEventListener('click',
        function()
        {
            window.location = '../Interaccion/Filtrar.do?id='
                +(document.getElementById('ir_interaccion').value)
                +"&pag=Registro.jspx";
        },
        false
    );


};
