

window.onload = function() {

    MensajesOnload();
    var Clase = "Usuario";


    var ub_eliminar = document.getElementById('ub_eliminar');
    ub_eliminar.addEventListener('click',
        function()
        {
            var form = document.getElementById("ub_form");
            var accion =  form.getAttribute('action') ;
            AjaxPeticionURL(accion, getDataForm(form));

            if ( MensajeErrorCheck() )
            {
              window.location = "../"+Clase+"/Lista.jspx";
            }
            else
            {
                MensajesOnload();
            }
            Mensaje.contenido = "";
        },
        false
    );



    var ub_cancelar = document.getElementById('ub_cancelar');
    ub_cancelar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Filtrar.do?id="
                +(document.getElementById('ub_usuario').value)
                +"&pag=Registro.jspx";
        },
        false
    );

//  javascript:document.ub_form.submit()

};
