

function producto_calculate(prefijo)
{            
    var precio_venta = document.getElementById( prefijo+"precio_venta" ).value;
    precio_venta = precio_venta.replace(",","");
    
    var impuesto = document.getElementById( prefijo+"impuesto" ).value;        
    impuesto = impuesto.replace(",","");
        
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
        else if ( impuesto == 0)
        {                
            var_impuesto_valor = precio_venta;                
        }
        
        document.getElementById( prefijo+"impuesto_valor").value = (var_impuesto_valor);
        document.getElementById( prefijo+"precio_valor").value = (precio_venta - var_impuesto_valor);
    
    }
    else
    {
                
        document.getElementById( prefijo+"impuesto_valor").value = 0;
        document.getElementById( prefijo+"precio_valor").value = 0;            
    }
           
}





function campos_interaccion(prefijo)
{
     
    var nombre = document.getElementById( prefijo+'nombre' );        
    nombre.onfocus  = function() {                
        recibirEnfoque('i2');            
    };
    nombre.onblur  = function() {
        perderEnfoque('i2');
    };
   
   
    var codigo_barra = document.getElementById( prefijo+'codigo_barra');        
    codigo_barra.onfocus  = function() {                
        recibirEnfoque('i3');            
    };
    codigo_barra.onblur  = function() {
        perderEnfoque('i3');
    };    
    
    
    var categoria = document.getElementById( prefijo+'categoria');  
    if (categoria.value == ""){
        categoria.value = 0;
    }       
    
    categoria.onfocus  = function() {                
        recibirEnfoque('i4');            
    };
    categoria.onblur  = function() {
        perderEnfoque('i4');
        AjaxPeticion('../Categoria/Mostrar/Descripcion.do?valor='+this.value,  prefijo+'categoria_descripcion') ;
        zero( prefijo+'categoria' );
    };
    
    
    var qry_categoria = document.getElementById( prefijo+'qry_categoria');
    qry_categoria.addEventListener('click',
        function() 
        {       
            mostrarVentana('capa_oscura_segunda');
            mostrarVentana('capa_clara_segunda');
            dimensionarVentana('capa_clara_segunda', 700, 500);            
            Busqueda_relacionada("Categoria", prefijo , prefijo+"categoria_descripcion", "Descripcion");            
        }, 
        false
    );            
    
    
    
    var precio_venta = document.getElementById( prefijo+'precio_venta');
    if (precio_venta.value == ""){
        precio_venta.value = 0;
    }           
    precio_venta.onfocus  = function() {                
        recibirEnfoque('i5');            
    };
    precio_venta.onblur  = function() {
        perderEnfoque('i5');
        producto_calculate( prefijo );
        zero( prefijo+'precio_venta');
                
        precio_valor.value = formatoNumero(precio_valor.value);
        impuesto_valor.value = formatoNumero(impuesto_valor.value);
        
    };    
    precio_venta.onkeyup  = function() {
        precio_venta.value = formatoNumero(precio_venta.value);
    };  
    //formatoNumero(precio_venta);
    
    
    var impuesto = document.getElementById( prefijo+'impuesto');
    if (impuesto.value == ""){
        impuesto.value = 10;
    }       
    impuesto.onfocus  = function() {                
        recibirEnfoque('i6');            
    };
    impuesto.onblur  = function() {
        perderEnfoque('i6');
        producto_calculate( prefijo);
        zero( prefijo+'impuesto');
        
        precio_valor.value = formatoNumero(precio_valor.value);
        impuesto_valor.value = formatoNumero(impuesto_valor.value);                
    };      
    
    
    var precio_valor = document.getElementById( prefijo+'precio_valor');
    if (precio_valor.value == ""){
        precio_valor.value = 0;
    }
    //formatoNumero(precio_valor);
    
  
    var impuesto_valor = document.getElementById( prefijo+'impuesto_valor');
    if (impuesto_valor.value == ""){
        impuesto_valor.value = 0;
    }    
    //formatoNumero(impuesto_valor);


}





function validar_form(prefijo) 
{
    
    var nombre = document.getElementById( prefijo+"nombre") ;
    if (nombre.value.trim()=='') 
    {
        alerta_error('Falta agregar descripcion del producto');
        nombre.focus();
        return false;
    }  
    
    
    var categoria = document.getElementById( prefijo+"categoria") ;
    if (categoria.value.trim()=='' || (categoria.value.trim()=='0') ) 
    {
        alerta_error('Falta agregar categoria');
        categoria.focus();
        return false;
    }      
    
    
    
    var precio_venta = document.getElementById( prefijo+"precio_venta") ;
    if ((precio_venta.value.trim()=='') || (precio_venta.value.trim()=='0')) 
    {
        alerta_error('EL monto de precio de venta es invalido');
        precio_venta.focus();
        return false;
    }       
    
    
    
    var impuesto = document.getElementById( prefijo+"impuesto") ;
    if ( !((impuesto.value.trim()=='0') 
            || (impuesto.value.trim()=='5') 
            || (impuesto.value.trim()=='10'))) 
    {
        alerta_error('El valor del impuesto solo puede ser 0, 5 o 10');
        impuesto.focus();        
        return false;
    }       
        
    return true;
    
}



function formato_load(prefijo) 
{
    
    var precio_venta = document.getElementById( prefijo+'precio_venta');    
    precio_venta.value = formatoNumero(precio_venta.value);    
    
    var precio_valor = document.getElementById( prefijo+'precio_valor');    
    precio_valor.value = formatoNumero(precio_valor.value);    
    
    
    var impuesto_valor = document.getElementById( prefijo+'impuesto_valor');    
    impuesto_valor.value = formatoNumero(impuesto_valor.value);    
    
    
    var impuesto = document.getElementById( prefijo+'impuesto');    
    impuesto.value = formatoNumero(impuesto.value);    
        
        
    if ( document.getElementById( prefijo+'existencia') )
    {
        var existencia = document.getElementById( prefijo+'existencia');    
        existencia.value = formatoNumero(existencia.value);                
    }    
    
    
}








