
function CompraDetalle_TransaccionRegistro(){
       
    cdtr_formato_load();    
        
    var cdtr_borrar = document.getElementById('cdtr_borrar');
    cdtr_borrar.addEventListener('click',
        function() {            
            
            AjaxServlet( "../CompraDetalle/Session/Borrar.do?id="
                + document.getElementById('cdtr_id').value );
                
            CompraDetalle_TransaccionLista();                
            cdtr_cerrar.click();

            
        },
        false
    );


    var cdtr_cerrar = document.getElementById('cdtr_cerrar');
    cdtr_cerrar.addEventListener('click',
        function() {
            
            ocultarVentana('capa_oscura');
            ocultarVentana('capa_clara');
        
        },
        false
    );

}


function cdtr_formato_load() 
{
    
    var cdtr_cantidad = document.getElementById( 'cdtr_cantidad');    
    cdtr_cantidad.value = formatoNumero(cdtr_cantidad.value);    

    var cdtr_precio = document.getElementById( 'cdtr_precio');    
    cdtr_precio.value = formatoNumero(cdtr_precio.value);    

    var cdtr_sub_total = document.getElementById( 'cdtr_sub_total');    
    cdtr_sub_total.value = formatoNumero(cdtr_sub_total.value);    

}




