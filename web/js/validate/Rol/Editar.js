

window.onload = function() {

    MensajesOnload();
    campos_interaccion("re_");

    var aceptar = document.getElementById('re_aceptar');
    aceptar.addEventListener('click',
        function()
        {
            if (validar_form("re_"))
            {
                javascript:document.re_form.submit();
            }
        },
        false
    );


    var cancelar = document.getElementById('re_cancelar');
    cancelar.addEventListener('click',
        function()
        {
            window.location = '../Rol/Filtrar.do?id='
                +(document.getElementById('re_rol').value)
                +"&pag=Registro.jspx";
        },
        false
    );


};
