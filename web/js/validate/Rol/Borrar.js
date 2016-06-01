



window.onload = function() {

//   MensajesOnload();


    var eliminar = document.getElementById('rb_eliminar');
    eliminar.addEventListener('click',
        function()
        {

            var form = document.getElementById("rb_form");
            var accion =  form.getAttribute('action') ;
            AjaxPeticionURL(accion, getDataForm(form));

            if ( MensajeErrorCheck() )
            {
              window.location = '../Rol/Lista.jspx';
            }
            else
            {                
                MensajesOnload();
            }
            Mensaje.contenido = "";

        },
        false
    );



    var cancelar = document.getElementById('rb_cancelar');
    cancelar.addEventListener('click',
        function()
        {

            window.location = '../Rol/Filtrar.do?id='
                +(document.getElementById('rb_rol').value)
                +"&pag=Registro.jspx";
        },
        false
    );


}
