
function producto_calculate()
{
        
        var precio_venta = document.getElementById("id_precio_venta").value;
        var impuesto = document.getElementById("id_impuesto").value;        
        
        var var_precio_valor = 0;
        var var_impuesto_valor = 0;
        
        
        if (!(isNaN(precio_venta))  &&  !(isNaN(impuesto)))
        {       
                if (impuesto == 10)
                {
                var_impuesto_valor = Math.round( precio_venta / 11 );                
                }
                else if (impuesto == 5)
                {                
                var_impuesto_valor = Math.round( precio_venta / 21 );                
                }
                else if (impuesto == 0)
                {                
                var_impuesto_valor = precio_venta;                
                }
                
                document.getElementById("id_impuesto_valor").value = (var_impuesto_valor);
                document.getElementById("id_precio_valor").value = (precio_venta - var_impuesto_valor);
        
        }
        else
        {
                document.getElementById("id_impuesto_valor").value = 0;
                document.getElementById("id_precio_valor").value = 0;            
        }
           
           
}





