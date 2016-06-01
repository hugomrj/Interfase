

function CompraDetalle_TransaccionAgregar(){

    cdta_campos_interaccion();

    var cdta_agregar = document.getElementById('cdta_agregar');
    cdta_agregar.addEventListener('click',
        function() {
                
                if (CompraDetalle_TransaccionAgregar_validad() )                
                {           
                    var form = document.getElementById("cdta_form");            
                    var accion =  form.getAttribute('action') ; 
                
                    AjaxPeticionURL( accion, getDataForm(form) );
                    CompraDetalle_TransaccionLista();

                        cdta_cerrar.click();                
                }
   
        },
        false
    );
    
    
    var cdta_cerrar = document.getElementById('cdta_cerrar');
    cdta_cerrar.addEventListener('click',
        function() {    
            javascript:ocultarVentana('capa_oscura');
            javascript:ocultarVentana('capa_clara');
        },
        false
    );           
    

}




function cdta_campos_interaccion()
{
     
    var cdta_producto = document.getElementById( 'cdta_producto' );      
    if (cdta_producto.value == ""){
        cdta_producto.value = 0;
    }         
    cdta_producto.onfocus  = function() {                
        recibirEnfoque('cdta_i2');            
    };
    cdta_producto.onblur  = function() {
        perderEnfoque('cdta_i2');
        AjaxPeticion('../Producto/Mostrar/Nombre.do?valor='+this.value,  'cdta_producto_nombre') ;
        zero( 'cdta_producto' );
        cdta_cantidad.focus();  
    };
    
    var cdta_qry_producto = document.getElementById( 'cdta_qry_producto');
    cdta_qry_producto.addEventListener('click',
        function() 
        {   
            mostrarVentana('capa_oscura_segunda');
            mostrarVentana('capa_clara_segunda');
            dimensionarVentana('capa_clara_segunda', 700, 500);
            Busqueda_relacionada("Producto", "cdta_" , "cdta_producto_nombre", "Nombre");      
        }, 
        false
    );            
    
    
    var cdta_cantidad = document.getElementById( 'cdta_cantidad');  
    if (cdta_cantidad.value == ""){
        cdta_cantidad.value = 0;
    }         
    cdta_cantidad.onfocus  = function() {                
        recibirEnfoque('cdta_i3');
        cdta_cantidad.select();                
    };
    cdta_cantidad.onblur  = function() {
        perderEnfoque('cdta_i3');        
        cdta_cantidad.onkeyup();
        cdta_sub_total.oncommand();
    };        
    cdta_cantidad.onkeyup  = function() {
        cdta_cantidad.value = formatoNumero(cdta_cantidad.value);
    };             
    
    var cdta_precio = document.getElementById( 'cdta_precio');  
    if (cdta_precio.value == ""){
        cdta_precio.value = 0;
    }           
    cdta_precio.onfocus  = function() {                
        recibirEnfoque('cdta_i4');
        cdta_precio.select();            
    };
    cdta_precio.onblur  = function() {
        perderEnfoque('cdta_i4');
        cdta_precio.onkeyup();
        cdta_sub_total.oncommand();
        
    };
    cdta_precio.onkeyup  = function() {
        cdta_precio.value = formatoNumero(cdta_precio.value);
    };         
    
    var cdta_sub_total = document.getElementById( 'cdta_sub_total');
    if (cdta_sub_total.value == ""){
        cdta_sub_total.value = 0;
    }   
    cdta_sub_total.oncommand  = function() {
        cdta_sub_total.value = multiplicar(cdta_precio.value, cdta_cantidad.value);
        cdta_sub_total.value = formatoNumero(cdta_sub_total.value);
    };    
    

}



function CompraDetalle_TransaccionAgregar_validad(){
    
    
    var nombre = document.getElementById( "cdta_producto_nombre") ;
    if (nombre.value.trim()=='') 
    {
        alerta_error('Falta agregar producto');
        nombre.focus();
        return false;
    }  
    
    
    var cantidad = document.getElementById( "cdta_cantidad") ;
    if (cantidad.value.trim()=='' || (cantidad.value.trim()=='0') ) 
    {
        alerta_error('Falta agregar cantidad');
        cantidad.focus();
        return false;
    }          
    
        
    var precio = document.getElementById( "cdta_precio") ;
    if (precio.value.trim()=='' || (precio.value.trim()=='0') ) 
    {
        alerta_error('Falta agregar precio');
        precio.focus();
        return false;
    }          
            
    return true;
    
}



