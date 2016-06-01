
window.onload = function() {
        
    MensajesOnload();  
    var Clase = "Vendedor";
    var filtroID = "?id="+document.getElementById('vb_vendedor').value;


    var vb_eliminar = document.getElementById('vb_eliminar');
    vb_eliminar.addEventListener('click',
        function()
        {
            var form = document.getElementById("vb_form");
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
Borrar




    var vb_cancelar = document.getElementById('vb_cancelar');
    vb_cancelar.addEventListener('click',
        function()
        {            
            window.location = "../"+Clase+"/Filtrar.do"
                +filtroID
                +"&pag=Registro.jspx";                
        
        },
        false
    );

                                        
};


