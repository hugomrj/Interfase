
function SubTotal()
{
           
           var cantidad = document.getElementById("id_cantidad").value;
           var precio = document.getElementById("id_precio_venta").value;
           var impuesto = document.getElementById("id_impuesto").value;
           var resultado = 0;
                   
           
           if (!(isNaN(precio)))
           {            
               var impuestoMonto = (parseInt(precio) * parseInt(impuesto)) / 100 ;
               resultado =  (parseInt(precio) + parseInt(impuestoMonto))  ;
               resultado = resultado * parseInt(cantidad);
               
                if (isNaN(resultado))
                {
                   document.getElementById("id_sub_total").value = 0 ;                                
                }
                else
                {
                    document.getElementById("id_sub_total").value = resultado ;                     
                }
           }
                

}





