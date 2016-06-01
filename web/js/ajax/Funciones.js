
var objetoAjax = null;
    objetoAjax = new ConstructorXMLHttpRequest();

function AjaxPeticion (url, elementoDOM) {

        if(objetoAjax) 
        { 
            objetoAjax.open('GET', url, false); //Abrimos la url, false=forma síncrona
            objetoAjax.send(null); //No le enviamos datos al servidor.

            ID = elementoDOM;
            document.getElementById(elementoDOM).innerHTML = objetoAjax.responseText;

        }
}

function AjaxPeticionURL(url, parametros) {
        if(objetoAjax) 
        { 
            objetoAjax.open('POST', url, false);            
            
            objetoAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            
            objetoAjax.send(parametros); 
        }
}

function AjaxPeticionValue (url, elementoDOM) {

        if(objetoAjax) 
        { 
            objetoAjax.open('GET', url, false); //Abrimos la url, false=forma síncrona
            objetoAjax.send(null); //No le enviamos datos al servidor.
            
            document.getElementById(elementoDOM).value = objetoAjax.responseText;

        }
}





function ocultarVentana(elementoDOM)
{
    var ventana = document.getElementById(elementoDOM); 
    ventana.style.display = 'none'; 
}



function mostrarVentana(elementoDOM)
{
    var ventana = document.getElementById(elementoDOM); 
 
    document.getElementById(elementoDOM).style.position = 'absolute' ;
    document.getElementById(elementoDOM).style.display = 'block' ;
    document.getElementById(elementoDOM).style.width = '100%' ;
    document.getElementById(elementoDOM).style.height = '100%' ;

}


function asignarValor(elementoDOM, valor )
{
    document.getElementById(elementoDOM).value = valor  ;
}


function dimensionarVentana(elementoDOM, ancho, alto)
{

    var ventana = document.getElementById(elementoDOM); 
        
    var valor_ancho = ancho + "px";
    var valor_alto = alto + "px";

    ventana.style.setProperty('top', '50%');
    ventana.style.setProperty('left', '50%');
    
    ventana.style.setProperty('width', valor_ancho);
    ventana.style.setProperty('height', valor_alto);
        
    ventana.style.setProperty('margin-top', '-'+(alto/2)+'px');
    ventana.style.setProperty('margin-left', '-'+(ancho/2)+'px');
    
    
}


function ajaxSessionObjeto(url) {

        if(objetoAjax) 
        { 
            objetoAjax.open('GET', url, false); //Abrimos la url, false=forma síncrona
            objetoAjax.send(null); //No le enviamos datos al servidor.
        }

}


function formatoNumero(input) {

    var num = input.value.replace(/[\,.]/g,'');

    if(!isNaN(num))
    {
        
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g,'$1,');        
        num = num.split('').reverse().join('').replace(/^[\,]/,'');
        input.value = num;

    }
    else
    {        
        input.value = input.value.replace(/[^\d\,]*/g,'');
    }
    
}



function recibirEnfoque(valor)
{			
        document.getElementById(valor).className = "Enfoque";			
}		

function perderEnfoque(valor)
{		
        document.getElementById(valor).className = "SinEnfoque";
}




function getDataForm(formulario){    

        CamposImput = formulario.getElementsByTagName("input");             
        var str = "";                
        for(var i=0; i< CamposImput.length; i++) { 
            
            if (str  != "")
            {                    
                str =  str  + "&";
            }
                str =  str  + CamposImput[i].getAttribute('name');
                str =   str + "=";
                str =   str + CamposImput[i].value;                        
        }        
        return str;
    
}


function alerta_error(mensaje){   


            var indice = 1;    
            var id = "err";
            id = (id + indice.toString().trim());


            if (document.getElementById(id)){
                return;
            }


            var midiv = document.createElement("div");
            midiv.setAttribute("id", id);    
            
            midiv.setAttribute("class", "notificacion_error");

            midiv.innerHTML = "<div class='contenedorInterior'><div class='left'>"+mensaje+"</div>"
                    +"</div>";                

            document.body.appendChild(midiv); 

            erasediv = document.getElementById(id);
           // var strCmd = "document.body.removeChild(erasediv);";                    
            var strCmd = "if (document.getElementById('"+id+"')){ document.body.removeChild(erasediv);}";                    
            var timeOutPeriod = 3000;
            var hideTimer = setTimeout(strCmd, timeOutPeriod);             

            indice = Number(indice) + 1;


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


