

window.onload = function() {
        
    MensajesOnload(); 
    
    fomato_tabla();
                                
};




function fomato_tabla (){
 
 
 var rows = document.getElementById( "lista_compras" ).rows.length;
 var celda ;
 
    for(i=1; i<rows; i++)
    {    
        celda = document.getElementById("lista_compras").rows[i].cells[1] ;        
        
        //valorcelda = celda.innerHTML;                
        //celda.innerHTML = formatoFecha(valorcelda.trim());        
        
        celda.innerHTML = formatoFecha( (celda.innerHTML).trim() );        
    }    




};
























