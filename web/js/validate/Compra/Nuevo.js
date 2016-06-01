

window.onload = function() {
        
    MensajesOnload();    
    campos_interaccion();            
    CompraDetalle_TransaccionLista();
                                        
    // javascript:ajaxSessionObjeto('../Compra/Setter.do?proveedor='+this.value);  
  
  
  
  
  
    var cn_guardar = document.getElementById('cn_guardar');
    cn_guardar.addEventListener('click',
        function() {
            
/*
<c:url value="../Compra/Transaccion/Guardar.do" var="UrlGuardar"> </c:url>                                             
<div class ="commandbutton">
        <a href="${UrlGuardar}" class="botonEnlace">Guardar</a>
</div>    
*/            
                if ( factura_nuevo_validar_form() )
                {
                                        
                    

var form = document.getElementById("cn_form");            
var accion =  form.getAttribute('action') ; 

// aca se puede arrglar la fecha

if ( cn_fecha_factura.type == '' ){    
}

AjaxPeticionURL( accion, getDataForm(form) );                        
               
               
               
                    //javascript:document.ca_form.submit();
                }            
                
        },
        false
    );  
  
    var cn_cancelar = document.getElementById('cn_cancelar');
    cn_cancelar.addEventListener('click',
        function() {            
            window.location = "../Compra/Transaccion/Cancelar.do";        
        },
        false
    );  
  
                                
};



function campos_interaccion()
{
    var cn_factura = document.getElementById( 'cn_factura' );        
    cn_factura.onfocus  = function() {                
        recibirEnfoque('i2');            
    };
    cn_factura.onblur  = function() {
        perderEnfoque('i2');
    };   
   
    var cn_fecha_factura = document.getElementById( 'cn_fecha_factura');        
    //   alert(cn_fecha_factura.type);    
    cn_fecha_factura.onfocus  = function() {                
        recibirEnfoque('i3');            
    };
    cn_fecha_factura.onblur  = function() {
        perderEnfoque('i3');
    };
    
    var cn_proveedor = document.getElementById( 'cn_proveedor');  
    if (cn_proveedor.value == ""){
        cn_proveedor.value = 0;
    }           
    cn_proveedor.onfocus  = function() {                
        recibirEnfoque('i4');            
    };
    cn_proveedor.onblur  = function() {
        perderEnfoque('i4');
        AjaxPeticion('../Proveedor/Mostrar/Nombre.do?valor='+this.value,  'cn_proveedor_nombre') ;
        zero( 'cn_proveedor' );
    };
    var cn_qry_proveedor = document.getElementById( 'cn_qry_proveedor');
    cn_qry_proveedor.addEventListener('click',
        function() 
        {                   
            mostrarVentana('capa_oscura_segunda');
            mostrarVentana('capa_clara_segunda');
            dimensionarVentana('capa_clara_segunda', 700, 500);            
            Busqueda_relacionada("Proveedor", "cn_" , "cn_proveedor_nombre", "Nombre");                         
        }, 
        false
    );            
    

}


function factura_nuevo_validar_form()
{
    var cn_factura = document.getElementById( "cn_factura") ;
    if ((cn_factura.value.trim()=='') || (cn_factura.value.trim()=='0'))
    {
        alerta_error('Falta numero de factura');
        cn_factura.focus();
        return false;
    }


    // falta fecha
    var cn_fecha_factura = document.getElementById( "cn_fecha_factura") ;

    
    var cn_proveedor = document.getElementById( "cn_proveedor") ;
    if (cn_proveedor.value.trim()=='' || (cn_proveedor.value.trim()=='0') ) 
    {
        alerta_error('Falta agregar proveedor');
        cn_proveedor.focus();
        return false;
    }    



    return true;

}

