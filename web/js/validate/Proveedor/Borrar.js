



window.onload = function() {
        
    MensajesOnload();  
    var Clase = "Proveedor";


    var eliminar = document.getElementById('pb_eliminar');
    eliminar.addEventListener('click',
        function()
        {

            var form = document.getElementById("pb_form");
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

    var cancelar = document.getElementById('pb_cancelar');
    cancelar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Filtrar.do?id="
                +(document.getElementById('pb_proveedor').value)
                +"&pag=Registro.jspx";
        },
        false
    );



                                        
};


