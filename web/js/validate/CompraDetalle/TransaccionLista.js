

function CompraDetalle_TransaccionLista(){
        
    AjaxPeticion('../CompraDetalle/Transaccion/Listar.do','tab_body');      
    
    // aca tiene que ir el formateo de la tabla,
    fomato_tabla ();
           
    // aca tiene que ir la funcionalidad
    seleccionar_registro();         
           
    var cdtl_agregar = document.getElementById('cdtl_agregar');
    cdtl_agregar.addEventListener('click',
        function() {
            
                mostrarVentana('capa_oscura');
                mostrarVentana('capa_clara');
                AjaxPeticion( '../CompraDetalle/Transaccion/Agregar.do' , 'capa_clara' );
                dimensionarVentana('capa_clara', 700, 250);                    

            //              javascript:ajaxSessionObjeto('../Compra/Setter.do?proveedor='+document.getElementById('id_proveedor').value );
    
                CompraDetalle_TransaccionAgregar();               
        
        },
        false
    );
    
    
    // sumas de subtotales
    var cdtl_suma_cantidad = document.getElementById('cdtl_suma_cantidad');    
    AjaxPeticion ("../CompraDetalle/Suma/Cantidad.do", "cdtl_suma_cantidad") ;
    cdtl_suma_cantidad.innerHTML = formatoNumero(cdtl_suma_cantidad.innerHTML);    
    
    var cdtl_suma_subtotal = document.getElementById('cdtl_suma_subtotal');    
    AjaxPeticion ("../CompraDetalle/Suma/Subtotal.do", "cdtl_suma_subtotal") ;
    cdtl_suma_subtotal.innerHTML = formatoNumero(cdtl_suma_subtotal.innerHTML);    
    
}


function fomato_tabla (){
    
    // var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    
    //var table = document.getElementById( "cdtl_tabla" );
    //var table = document.getElementById( "cdtl_tabla" ).tBodies;

    var table = document.getElementById('cdtl_tabla').getElementsByTagName('tbody')[0];
    
    //var rows = table.rows.length;
    var celda ;
    var valorcelda ;
    
    //for ( i=0; i<rows; i++ )
    for ( i=0; i < table.rows.length; i++ )
    {
          
        //celda = document.getElementById("cdtl_tabla").rows[i].cells[2] ;  
       
        var rows = document.getElementById("cdtl_tabla").getElementsByTagName('tbody')[0].rows[i] ;        
        
                
        celda = rows.cells[2] ;        
        //celda = document.getElementById("cdtl_tabla").getElementsByTagName('tbody')[0].rows[i].cells[2] ;        
        valorcelda = celda.innerHTML;                
        celda.innerHTML = formatoNumero(valorcelda);
    
        celda = document.getElementById("cdtl_tabla").getElementsByTagName('tbody')[0].rows[i].cells[3] ;        
        valorcelda = celda.innerHTML;                
        celda.innerHTML = formatoNumero(valorcelda);
    
        celda = document.getElementById("cdtl_tabla").getElementsByTagName('tbody')[0].rows[i].cells[4] ;        
        valorcelda = celda.innerHTML;                
        celda.innerHTML = formatoNumero(valorcelda);

    }    

}


    function seleccionar_registro()
    {
        var tabla_qry = document.getElementById('cdtl_tabla');
        var rows = tabla_qry.getElementsByTagName('tr');

        for (var i=0 ; i < rows.length; i++)
        {
            rows[i].addEventListener ( 'click',
                function() {
                    
                    registroid = this.getElementsByTagName( "producto" )[0].dataset.reg;
                    
                        javascript:mostrarVentana('capa_oscura');
                        javascript:mostrarVentana('capa_clara');
                        AjaxPeticion( '../CompraDetalle/Transaccion/Registro.do?id='+registroid
                        , 'capa_clara' );
                        dimensionarVentana('capa_clara', 700, 250);     
                        
                        CompraDetalle_TransaccionRegistro();
                        
                    },
                    false
                );

        }

    };


















