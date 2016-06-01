



window.onload = function() {

    MensajesOnload();


    var eliminar = document.getElementById('ie_eliminar');
    eliminar.addEventListener('click',
        function()
        {

            var form = document.getElementById("ie_form");
            var accion =  form.getAttribute('action') ;
            AjaxPeticionURL(accion, getDataForm(form));

            if ( MensajeErrorCheck() )
            {
              window.location = '../Interaccion/Lista.jspx';
            }
            else
            {             
                MensajesOnload();
            }
            Mensaje.contenido = "";

        },
        false
    );



    var cancelar = document.getElementById('ie_cancelar');
    cancelar.addEventListener('click',
        function()
        {

            window.location = '../Interaccion/Filtrar.do?id='
                +(document.getElementById('ie_interaccion').value)
                +"&pag=Registro.jspx";
        },
        false
    );


};
