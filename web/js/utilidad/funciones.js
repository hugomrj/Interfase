

    function justNumbers(e)
    {

        alert("hola");

       var keynum = window.event ? window.event.keyCode : e.which;
       if ((keynum == 8) || (keynum == 46))
            return true;
        return /\d/.test(String.fromCharCode(keynum));
    }



function existeFecha(fecha){

    alert(fecha.value);

      var fechaf = fecha.split("/");
      var day = fechaf[0];
      var month = fechaf[1];
      var year = fechaf[2];
      var date = new Date(year,month,'0');
      if((day-0)>(date.getDate()-0)){
            return false;
      }
      return true;
}




function getDataForm(formulario){

//      alert(convertirFecha(cn_fecha_factura.value));

        CamposImput = formulario.getElementsByTagName("input");
        var str = "";
        for(var i=0; i< CamposImput.length; i++) {

            if (str  != "")
            {
                str =  str  + "&";
            }
                str =  str  + CamposImput[i].getAttribute('name');
                str =   str + "=";
        //  alert( CamposImput[i].getAttribute('id'));
                str =   str + CamposImput[i].value;
                
        }
        return str;
}




function ValidaSoloNumeros() {
 if ((event.keyCode < 48) || (event.keyCode > 57))
  event.returnValue = false;
}


//function formatoNumero(input) {

function formatoNumero(num) {

    //var num = input.value.replace(/[\,.]/g,'');
    // var num = num.replace(/[\,.]/g,'');
   
    var buscar="," 
    num = num.replace(new RegExp(buscar,"g") ,"");        
    
    if (num == ""){
        return;
    }

    if(!isNaN(num))
    {

        if (num < 0){
            num = num * -1 ;
        }

        //num = parseInt(num,10);
        num = Number(num,10);

        num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g,'$1,');
        num = num.split('').reverse().join('').replace(/^[\,]/,'');
        //input.value = num;
        return num;

    }
    else
    {

        //input.value = input.value.replace(/[^\d\,]*/g,'');
        return num.replace(/[^\d\,]*/g,'');
    }

}




function zero(StrElemento)
{

    var elemento = document.getElementById(StrElemento) ;
    if (elemento.value.trim()=='')
    {
        elemento.value = 0;
    }

}





function formatoFecha(str) {
    
    var retorno = "";

    if (str == ""){
        return;
    }

    retorno = str.substring(8,10); 

    var mes = "";
    mes = MesCorto(str.substring(4,7));
        
    retorno = retorno + " " + mes ;
//  Mon May 02 22:41:47 PYT 2016

    retorno = retorno + " " + Right(str, 4);
    return retorno;

}

function MesCorto(mes){
    var retornar = "";
    
     switch (mes)
            {
               case "Jan": 
                    retornar = "ene";
                    break;
            
               default:  
                   retornar = mes;
            }    
    
    
    return retornar;
}






function Left(str, n){
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else
        return String(str).substring(0,n);
}
function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}




function multiplicar(factor1, factor2){
/*
    var buscar="," 
    num1 = factor1.replace(new RegExp(buscar,"g") ,"");        
    num2 = factor2.replace(new RegExp(buscar,"g") ,"");        
   */ 
    
    var producto = 0;
    producto = qcoma(factor1) * qcoma(factor2) ;    
    
    return producto;
}


function qcoma (strnumero){
    
    var buscar="," 
    var resultado = 0;
    
    resultado =  strnumero.replace(new RegExp(buscar,"g") ,"");   
    return resultado;      
    
}



function convertirFecha(str) {
        
    var retorno = "";
    if (str == ""){
        return;
    }
    
    var dd = str.substring(0,2); 
    
    var mm = str.substring(3,5); 
    
    var aaaa = str.substring(6,10); 
        
    return aaaa+"-"+mm+"-"+dd;

}