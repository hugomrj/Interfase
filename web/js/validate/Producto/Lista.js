

window.onload = function() {
        
    MensajesOnload(); 
    
    fomato_tabla();
                                
}



function fomato_tabla (){
    

 var table = document.getElementById( "lista_productos" );
 var rows = table.rows.length;
 var celda ;
 var valorcelda ;
 
    for(i=1; i<rows; i++)
    {
    
        celda = document.getElementById("lista_productos").rows[i].cells[3] ;        
        valorcelda = celda.innerHTML;                
        celda.innerHTML = formatoNumero(valorcelda);
    
        celda = document.getElementById("lista_productos").rows[i].cells[4] ;        
        valorcelda = celda.innerHTML;                
        celda.innerHTML = formatoNumero(valorcelda);
    
    }    


};



















