



window.onload = function() {
        
    MensajesOnload();  
    var Clase = "Producto";
    
    formato_load("pb_")


    var pb_eliminar = document.getElementById('pb_eliminar');
    pb_eliminar.addEventListener('click',
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



    var pb_cancelar = document.getElementById('pb_cancelar');
    pb_cancelar.addEventListener('click',
        function()
        {
            window.location = "../"+Clase+"/Filtrar.do?id="
                +(document.getElementById('pb_producto').value)
                +"&pag=Registro.jspx";
        },
        false
    );

                                        
};


