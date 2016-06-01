


window.onload = function() {

    MensajesOnload();
    var Clase = "Cliente";
    var filtroID = "?id="+document.getElementById('cb_cliente').value;

    var cb_eliminar = document.getElementById('cb_eliminar');
    cb_eliminar.addEventListener('click',
        function()
        {
            var form = document.getElementById("cb_form");
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



    var cb_cancelar = document.getElementById('cb_cancelar');
    cb_cancelar.addEventListener('click',
        function()
        {       
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID
                +"&pag=Registro.jspx";                        
        },
        false
    );


};
