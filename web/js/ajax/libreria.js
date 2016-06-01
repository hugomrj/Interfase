
function ConstructorXMLHttpRequest()
{

    if(window.XMLHttpRequest)
    {
        return new XMLHttpRequest(); //Si lo tiene, crearemos el objeto con este método.
    }


    else if(window.ActiveXObject)
    {
        var versionesObj = new Array(
        'Msxml2.XMLHTTP.5.0',
        'Msxml2.XMLHTTP.4.0',
        'Msxml2.XMLHTTP.3.0',
        'Msxml2.XMLHTTP',
        'Microsoft.XMLHTTP');

        for (var i = 0; i < versionesObj.length; i++)
        {
            try
            {
                return new ActiveXObject(versionesObj[i]);
            }
            catch (errorControlado) //Capturamos el error, ya que podría crearse otro objeto.
            {
            }
        }
    }

        throw new Error("No se pudo crear el objeto XMLHttpRequest");
};

var objetoAjax = null;
    objetoAjax = new ConstructorXMLHttpRequest();



function AjaxPeticion (url, elementoDOM) {

        if(objetoAjax)
        {
            objetoAjax.open('GET', url, false); //Abrimos la url, false=forma síncrona
            objetoAjax.send(null); //No le enviamos datos al servidor.

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



function AjaxServlet (url) {

    if(objetoAjax)
    {

        objetoAjax.open('GET', url, false);
        objetoAjax.send(null);

        var retorno = objetoAjax.responseText;

        if (retorno.trim() !== '')
        {
            return retorno;
        }
        else
        {
            return null;
        }

    }

}



function ajaxSessionObjeto(url) {

        if(objetoAjax)
        {
            objetoAjax.open('GET', url, false); //Abrimos la url, false=forma síncrona
            objetoAjax.send(null); //No le enviamos datos al servidor.
        }

}



function ocultarVentana(elementoDOM)
{
    var ventana = document.getElementById(elementoDOM);
    ventana.style.display = 'none';
}



function mostrarVentana(elementoDOM)
{

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

    ventana.style.setProperty('padding', '1rem');
//    ventana.style.setProperty('border', '1px solid');

    ventana.style.setProperty('height', null);

    ventana.className = 'cc-border';


}







function recibirEnfoque(valor)
{
    document.getElementById(valor).className = "Enfoque";
}

function perderEnfoque(valor)
{
    document.getElementById(valor).className = "SinEnfoque";
}






function alerta_error(mensaje){

     if (mensaje != null)
    {

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
        var timeOutPeriod = 4000;
        var hideTimer = setTimeout(strCmd, timeOutPeriod);

        indice = Number(indice) + 1;

    }
}


function alerta_info(mensaje){

    if (mensaje != null)
    {

            var indice = 1;
            var id = "info";
            id = (id + indice.toString().trim());


            if (document.getElementById(id)){
                return;
            }


            var midiv = document.createElement("div");
            midiv.setAttribute("id", id);

            midiv.setAttribute("class", "notificacion_info");

            midiv.innerHTML = "<div class='contenedorInterior'><div class='left'>"+mensaje+"</div>"
                    +"</div>";

            document.body.appendChild(midiv);

            erasediv = document.getElementById(id);
           // var strCmd = "document.body.removeChild(erasediv);";
            var strCmd = "if (document.getElementById('"+id+"')){ document.body.removeChild(erasediv);}";
            var timeOutPeriod = 4000;
            var hideTimer = setTimeout(strCmd, timeOutPeriod);

            indice = Number(indice) + 1;

    }

}





var Mensaje = {

    self: this,
    tipo: '',
    contenido: ''

};


function MensajesOnload()
{

    Mensaje.tipo = AjaxServlet('../MensajeTipo');
    Mensaje.contenido = AjaxServlet('../MensajeAction');
    AjaxServlet('../MensajeRemove');
    

    if (Mensaje.tipo != null)
    {
        if (Mensaje.tipo.trim()  === 'error')
        {
            alerta_error(Mensaje.contenido);
        }

        if (Mensaje.tipo.trim()  === 'info')
        {
            alerta_info(Mensaje.contenido);
        }
    }
    
    
}




function MensajeErrorCheck()
{
    Mensaje.tipo = AjaxServlet('../MensajeTipo');
    Mensaje.contenido = AjaxServlet('../MensajeAction');
    
    if (Mensaje.tipo.trim()  === 'error')
    {
        return false;
    }
    return true;
}






function sub_tabla_tab(tabla , tab, vinculo_coleccion, prefijo,
        cabecera, funcion, largo, ancho ){


    var vinculo_registro = vinculo_coleccion + '/Registro.do?id=';
    var vinculo_listar =  vinculo_coleccion + "/Listar.do";



    var sub_tabla = function(tabla , tab, vinculo_registro, largo, ancho ){

        //tabla tab rol
        var tabla_coleccion = document.getElementById( tabla );
        var rows = tabla_coleccion.getElementsByTagName('tr');

        for (var i=0 ; i < rows.length; i++)
        {
            rows[i].addEventListener ( 'click',
                function() {

                    AjaxServlet('../SetTab?val='+tab);
                    registroid = this.getElementsByTagName('id')[0].innerHTML;

                    mostrarVentana('capa_oscura');
                    mostrarVentana('capa_clara');

                    dimensionarVentana('capa_clara', largo, ancho);
                    AjaxPeticion( vinculo_registro + registroid , 'capa_clara' );

                    setTimeout(funcion, 0);

                },
                false
            );
        }
    }


    var botones_paginacion_tab = function(prefijo, cabecera, vinculo_listar){


        var vinculo = vinculo_listar + "?jsp="+prefijo+cabecera;

        var htmlElemento = "tab_body";

        var paginacion =  document.getElementById( prefijo+'pagination');
        var page = paginacion.dataset.page;

        var lis = paginacion.getElementsByTagName("li");
        for (var i=0; i<lis.length; i++)
        {

            if ( (( lis[i].dataset.orden ) == 'sig')  ||  (( lis[i].dataset.orden ) == 'ant') )
            {

                if ( (( lis[i].dataset.orden ) == 'sig') )
                {
                    if ( document.getElementById( prefijo+'pag_sig') )
                    {
                        document.getElementById( prefijo+'pag_sig').addEventListener('click',
                            function()
                            {
                                
                                AjaxPeticion(vinculo+'&page='+((parseInt(page)+1)), htmlElemento);
                                botones_paginacion_tab(prefijo, cabecera);

                                sub_tabla_tab(tabla , tab, vinculo_coleccion, prefijo,
                                        cabecera, funcion, largo, ancho );

                            },
                            false
                        );
                    }
                }

                if ( (( lis[i].dataset.orden ) == 'ant') )
                {
                    if ( document.getElementById( prefijo+'pag_ant') )
                    {
                        document.getElementById( prefijo+'pag_ant').addEventListener('click',
                            function()
                            {
                                AjaxPeticion(vinculo+'&page='+((parseInt(page)-1)), htmlElemento);
                                botones_paginacion_tab(prefijo, cabecera);

                                sub_tabla_tab(tabla , tab, vinculo_coleccion, prefijo,
                                        cabecera, funcion, largo, ancho );

                            },
                            false
                        );
                    }

                }

            }
            else
            {

                lis[i].addEventListener ( 'click',
                    function() {

                        AjaxPeticion(vinculo+'&page='
                            +(this.getElementsByTagName('a')[0].innerHTML.trim()),
                            htmlElemento);

                        sub_tabla_tab(tabla , tab, vinculo_coleccion, prefijo,
                                cabecera, funcion, largo, ancho );

                    },
                    false
                );
            }
        }
    }


    sub_tabla (tabla , tab, vinculo_registro, largo, ancho);
    botones_paginacion_tab(prefijo, cabecera, vinculo_listar);

}
// fin






function Busqueda_relacionada ( strObjeto, strPrefijo, strRetorno, servlet  )
{

    var seleccionar_registro = function( strObjeto, strPrefijo, strRetorno, servlet )
    {
        var tabla_qry = document.getElementById('tabla_qry_'+strObjeto.toLowerCase());
        var rows = tabla_qry.getElementsByTagName('tr');

        for (var i=0 ; i < rows.length; i++)
        {
            rows[i].addEventListener ( 'click',
                function() {

                registroid = this.getElementsByTagName(strObjeto.toLowerCase())[0].dataset.reg;

                    asignarValor( strPrefijo+strObjeto.toLowerCase(), registroid );

/*
                    AjaxPeticion('../'+strObjeto+'/Mostrar/'+servlet+'.do?valor='
                            +document.getElementById(strPrefijo+strObjeto.toLowerCase()).value,
                                strRetorno);
*/

                    document.getElementById(strPrefijo+strObjeto.toLowerCase()).onblur();  

                    ocultarVentana('capa_oscura_segunda');
                    ocultarVentana('capa_clara_segunda');
                
                                
                },
                false
            );

        }

    };


    var busqueda_registro = function( strObjeto, strPrefijo, strRetorno, servlet )
    {

        var buscar = document.getElementById('buscar');
        buscar.addEventListener('keyup',
            function(event) {

                if(event.keyCode == 13)
                {

                    AjaxPeticion( '../'+strObjeto+'/SubConsulta.do?jsp='+strPrefijo+'&buscar='
                            +document.getElementById('buscar').value ,
                            'idconsulta' );

                    seleccionar_registro( strObjeto, strPrefijo, strRetorno, servlet );
                    botones_sub_paginacion(  strObjeto, strPrefijo, strRetorno );

                }
            },
            false
        );


        var cerrar_busqueda = document.getElementById('cerrar_busqueda');
        cerrar_busqueda.addEventListener('click',
            function()
            {
                ocultarVentana('capa_oscura_segunda');
                ocultarVentana('capa_clara_segunda');
            },
            false
        );
    };



    var botones_sub_paginacion = function( strObjeto, strPrefijo, strRetorno, servlet )
    {

        var jspOrigen = strPrefijo;

        var vinculo = '../'+strObjeto+'/SubConsulta.do?jsp='+strPrefijo
                    +'&buscar='+document.getElementById('buscar').value ;

        var htmlElemento = "idconsulta";

        var paginacion =  document.getElementById( strPrefijo+'pagination');
        var page = paginacion.dataset.page;

        var lis = paginacion.getElementsByTagName("li");
        for (var i=0; i<lis.length; i++)
        {

            if ( (( lis[i].dataset.orden ) == 'sig')  ||  (( lis[i].dataset.orden ) == 'ant') )
            {

                if ( (( lis[i].dataset.orden ) == 'sig') )
                {
                    if ( document.getElementById( jspOrigen+'pag_sig') )
                    {
                        document.getElementById( jspOrigen+'pag_sig').addEventListener('click',
                            function()
                            {

                                AjaxPeticion(vinculo+'&page='+((parseInt(page)+1)), htmlElemento);

                                seleccionar_registro( strObjeto, strPrefijo, strRetorno, servlet );
                                botones_sub_paginacion ( strObjeto, strPrefijo, strRetorno, servlet );
                            },
                            false
                        );
                    }
                }

                if ( (( lis[i].dataset.orden ) == 'ant') )
                {
                    if ( document.getElementById( jspOrigen+'pag_ant') )
                    {
                        document.getElementById( jspOrigen+'pag_ant').addEventListener('click',
                            function()
                            {
                                AjaxPeticion(vinculo+'&page='+((parseInt(page)-1)), htmlElemento);

                                seleccionar_registro( strObjeto, strPrefijo, strRetorno, servlet );
                                botones_sub_paginacion ( strObjeto, strPrefijo, strRetorno, servlet );

                            },
                            false
                        );
                    }

                }

            }
            else
            {

                lis[i].addEventListener ( 'click',
                    function() {

                        AjaxPeticion(vinculo+'&page='
                            +(this.getElementsByTagName('a')[0].innerHTML.trim()),
                            htmlElemento);

                        seleccionar_registro( strObjeto, strPrefijo, strRetorno, servlet );
                        botones_sub_paginacion ( strObjeto, strPrefijo, strRetorno, servlet );

                    },
                    false
                );
            }
        }

    };


    AjaxPeticion('../'+strObjeto+'/Sub/Busqueda.jspx','capa_clara_segunda');
    busqueda_registro( strObjeto, strPrefijo, strRetorno, servlet );


    AjaxPeticion('../'+strObjeto+'/SubConsulta.do?jsp='+strPrefijo+'&buscar=', 'idconsulta');
    seleccionar_registro( strObjeto, strPrefijo, strRetorno, servlet );

    botones_sub_paginacion ( strObjeto, strPrefijo, strRetorno, servlet );

}
