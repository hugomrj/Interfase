
function validar_form_producto_TransaccionAgregar () {

    var precio_venta= document.getElementById("vd_ta_precio_venta") ;
    if (precio_venta.value.trim()==='') 
    {
        alerta_error('No existe producto');
        return false;
    }
        
    var cantidad = document.getElementById("vd_ta_cantidad") ;
    if (cantidad.value.trim()=='') 
    {
        alerta_error('Error en valor de cantidad');
        return false;
    }
    else
    {
        if ((!isNaN(cantidad.value))) 
        {
            if (cantidad.value <= 0)
            {
                alerta_error('Error en valor de cantidad');
                return false;
            }
        }
    }
   
    return true;
}


//            var sPath = window.location.pathname;
//            var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);



function validar_form_venta_agregar_nuevo () {
    // por definir si factura es autonumerico o no

    var v_fecha_factura = document.getElementById("fecha_factura");

        if (!existeFecha(v_fecha_factura))
        {                       
            alert('no existe fecha');
            return false;
        }
        else 
        {                
            alert('SIIII    no existe fecha');
            return false;
        }
    
    return true;
}



function ventadetalle_calculate()
{
    var cantidad = document.getElementById("vd_ta_cantidad").value;
    cantidad = cantidad.replace(",","");

    var precio = document.getElementById("vd_ta_precio_venta").value;        
    precio  = precio.replace(",","");

    var resultado = 0;
    if (!(isNaN(precio)))
    {            
        cantidad = cantidad.replace(",","");
        resultado =  (parseInt(precio) * parseInt(cantidad))  ;

         if (isNaN(resultado))
         {
            document.getElementById("vd_ta_sub_total").value = 0 ;                                
         }
         else
         {
             document.getElementById("vd_ta_sub_total").value = resultado ;                     
         }
    }           
}


function  formato_numero_bloqueados(){
    
        var vd_ta_precio_venta = document.getElementById('vd_ta_precio_venta');
        formatoNumero(vd_ta_precio_venta);   
        
        var vd_ta_sub_total = document.getElementById('vd_ta_sub_total');
        formatoNumero(vd_ta_sub_total);   
    
}



function producto_valores(){
    
    var vd_ta_producto = document.getElementById('vd_ta_producto');
    AjaxPeticionValue('../Producto/Mostrar/PrecioVenta.do?valor='
        +vd_ta_producto.value, 'vd_ta_precio_venta'); 

    AjaxPeticion('../Producto/Mostrar/Nombre.do?valor='
        +vd_ta_producto.value, 'vd_ta_nombreProducto');      

    AjaxPeticionValue('../Producto/Mostrar/Impuesto.do?valor='
        +vd_ta_producto.value, 'vd_ta_impuesto');  

    formato_numero_bloqueados();
}



function funcionMostarDetalle() 
{               

    if ( document.getElementById( "tab_body" )) {
        
        AjaxPeticion('../VentaDetalle/Transaccion/Listar.do','tab_body');        
                
        document.getElementById('agregar_producto').onclick  = function() {

            mostrarVentana('capa_oscura');
            mostrarVentana('capa_clara');
            AjaxPeticion( '../VentaDetalle/Transaccion/Agregar.do' , 'capa_clara' );
            dimensionarVentana('capa_clara', 800, 350);

            

            var vd_ta_cerrar = document.getElementById('vd_ta_cerrar');
            vd_ta_cerrar.addEventListener('click',
                    function() {
                        ocultarVentana('capa_oscura');
                        ocultarVentana('capa_clara');
                    }, 
                    false
                );


            var vd_ta_producto = document.getElementById('vd_ta_producto');
            vd_ta_producto.addEventListener('focus',
                    function() {
                        recibirEnfoque('cd_i2');
                    }, 
                    false
                );
            vd_ta_producto.addEventListener('blur',
                    function() {
                        perderEnfoque('cd_i2');
                        producto_valores();
                        ventadetalle_calculate();
                        formato_numero_bloqueados();
                    }, 
                    false
                );                            


            var vd_ta_cantidad = document.getElementById('vd_ta_cantidad');
            vd_ta_cantidad.value = 0;
            vd_ta_cantidad.addEventListener('focus',
                    function() {
                        recibirEnfoque('cd_i3');
                        //vd_ta_cantidad.selectionStart = 0;
     
                         vd_ta_cantidad.select()   ;     
                        
                    }, 
                    false
                );
            vd_ta_cantidad.addEventListener('blur',
                    function() {
                        perderEnfoque('cd_i3');
                        ventadetalle_calculate();
                        formato_numero_bloqueados();
                        //formatoNumero(vd_ta_cantidad);                           
                    }, 
                    false
                );
            vd_ta_cantidad.addEventListener('keyup',
                    function() {
                        formatoNumero(vd_ta_cantidad);                           
                    }, 
                    false
                );


            var vd_ta_agregar = document.getElementById('vd_ta_agregar');
            vd_ta_agregar.addEventListener('click',
                    function() {

                        formulario = document.getElementById("form_producto_TransaccionAgregar");      
                        
                        if (validar_form_producto_TransaccionAgregar())
                        {

                           var accion =  formulario.getAttribute('action') ;            
                            AjaxPeticionURL(accion, getDataForm(formulario));
                            funcionMostarDetalle( );
                            vd_ta_cerrar.click();                            
                        }
                        else
                        {
                            return;
                        }
                    }, 
                    false
                );



            var qry_producto = document.getElementById('qry_producto');
            qry_producto.addEventListener('click',
                    function() {
                                                   
                        mostrarVentana('capa_oscura_segunda');
                        mostrarVentana('capa_clara_segunda');
                        dimensionarVentana('capa_clara_segunda', 700, 500);
                        AjaxPeticion('../Producto/SubConsulta.do','capa_clara_segunda');


                        var tabla_qry_productos = document.getElementById('tabla_qry_productos');
                        var rows = tabla_qry_productos.getElementsByTagName('tr');                        
                        for (var i=0 ; i < rows.length; i++) 
                        {
                            rows[i].addEventListener ( 'click',
                                    function() { 
                                        
                                        registroid = this.getElementsByTagName('producto')[0].innerHTML;       
                                        
                                        asignarValor('vd_ta_producto', 
                                                registroid.trim());     
                                                                                       
                                        AjaxPeticion('../Producto/Mostrar/Nombre.do?valor='
                                                +document.getElementById('vd_ta_producto').value, 'vd_ta_nombreProducto'); 
                                      
                                        ocultarVentana('capa_oscura_segunda');
                                        ocultarVentana('capa_clara_segunda');            

                                        producto_valores();  
                                        ventadetalle_calculate();
                                        formato_numero_bloqueados();
                                        vd_ta_cantidad.focus();
                                    },
                                    false
                            );                            
                        }
                            
                            
                        var qry_producto_cerrar = document.getElementById('qry_producto_cerrar');
                        qry_producto_cerrar.onclick  = function() {                                          
                            ocultarVentana('capa_oscura_segunda');
                            ocultarVentana('capa_clara_segunda');                            
                        }  ;
                            
                    }, 
                    false
                );

            };// agregar_producto
        
    }
}




window.onload = function() {               
        
        var numero_factura = document.getElementById('numero_factura');
        numero_factura.onfocus  = function() {
            recibirEnfoque('i2');
        }  ;
        numero_factura.onblur  = function() {
                perderEnfoque('i2');
        }  ;                        


        var fecha_factura = document.getElementById('fecha_factura');
        fecha_factura.onfocus  = function() {
            recibirEnfoque('i3');
        }  ;
        fecha_factura.onblur  = function() {
                perderEnfoque('i3');
        }  ;                 

        var cliente = document.getElementById('cliente');
        cliente.onfocus  = function() {
            recibirEnfoque('i4');
        }  ;
        cliente.onblur  = function() {
                perderEnfoque('i4');                
                AjaxPeticion('../Cliente/Mostrar/Nombre.do?valor='+this.value, 'nombreDescripcion'); 

        }  ;                        

        var qry_cliente = document.getElementById('qry_cliente');
        qry_cliente.onclick  = function() {                
            mostrarVentana('capa_oscura_segunda');
            mostrarVentana('capa_clara_segunda');
            dimensionarVentana('capa_clara_segunda', 700, 400);
            AjaxPeticion('../Cliente/SubConsulta.do','capa_clara_segunda');            
        }  ;


        var vn_venta_guardar = document.getElementById('vn_venta_guardar');
        vn_venta_guardar.onclick  = function() {
                        
                        
            var sPath = window.location.pathname;
            var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
        
            validar_form_venta_agregar_nuevo();
        
        };


//            var picker = new Pikaday({ field: document.getElementById('fecha_factura') });
        

        funcionMostarDetalle( );
        
        
} ;