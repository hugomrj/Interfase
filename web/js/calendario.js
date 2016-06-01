function getAbsoluteElementPosition(element) 
{
	if (typeof element == "string")
	element = document.getElementById(element)
	
	if (!element) return { top:0,left:0 };
	
	var y = 0;
	var x = 0;
	while (element.offsetParent) {
		x += element.offsetLeft;
		y += element.offsetTop;
		element = element.offsetParent;
	}
	return {top:y,left:x};
}





var fecha = new Date();
var dd = fecha.getDate();
var mm = fecha.getMonth()+1;
var yyyy = fecha.getFullYear();



var Calendario = {
	
	self: this,
	fecha: new Date(),
	element: '',	
	dia: 0,
	mes: 0,
	año: 0,	
				
				
	setNowDate: function(){
		
		this.fecha = new Date();

		this.dia = this.fecha.getDate();
		this.mes = this.fecha.getMonth() + 1;
		this.año = this.fecha.getFullYear();
		
		
	},			

	setDate: function(){	

		//var valueDate = document.getElementById(this.element).value;
        
        var valueDate = this.element.value;

		var elem = valueDate.split('/');
		this.dia = elem[0];
		this.mes = elem[1];
		this.año = elem[2];
		
		if (!isNaN(this.mes)){			
			if (this.mes >= 1 && this.mes <= 12)
			{					
				if (!isNaN(this.año) && ((this.año >= 1000 && this.año <= 9999)))
				{
					if (!isNaN(this.dia) && ((this.dia >= 1 && this.dia <= 31)))
					{
						document.getElementById('demo').innerHTML = "es fecha!!!";
					}
					else
					{
						this.setNowDate();
												
						document.getElementById('demo').innerHTML = 
						String(this.dia)+"/"+String(this.mes)+"/"+String(this.año);
						
					}
				}
				else
				{
					document.getElementById('demo').innerHTML = "NO es fecha!!!";
				}
				
			}
			else
			{
				document.getElementById('demo').innerHTML = "NOOO es messsss";
			}
		}
		else
		{
			document.getElementById('demo').innerHTML = "NOOO es NUMERO";			
		}
		
		/*
		
		//alert(this.dia); alert(this.mes); alert(this.año);    
		

		if ((this.mes >= 1) && (this.mes <= 12)){
			this.fecha = new Date(this.año, this.mes, this.dia);	
		}
		else
		{
			this.fecha = new Date();
		}
		
		if ( isNaN( this.fecha.getTime() ) ) {

			document.getElementById('demo').innerHTML = "conversion de fecha invalida";
		}
		else 
		{				
			document.getElementById('demo').innerHTML = 
				String(this.fecha.getDate())+"/"+String(this.fecha.getMonth())+"/"+String(this.fecha.getFullYear());				
		}			
		
		*/
			
	},
				
		
	setElement: function(elementDOM){
			
		if (document.getElementById(elementDOM)){
			//this.element = elementDOM;
            this.element = document.getElementById(elementDOM);
            
		}
		else
		{
			this.element = "";				
		}							
	},
	
	
	
	show: function(element){			

		this.setElement(element);
		this.setDate();		
		this.render();
    },
	
	
    renderTitle : function(mes, year)
    {
        var html = "";
        var monthHtml;
        var yearHtml;
        
                
        html += '<div class="pika-title">';
        
        monthHtml = '<div class="pika-label">' + this.i18n.months[mes] + '</div>';
        html += monthHtml;
        
        yearHtml = '<div class="pika-label">' + year + '</div>';
        html += yearHtml;
        
        
            var prev = true;
            var next = true;
        

        html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + this.i18n.previousMonth + '</button>';
        html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + this.i18n.nextMonth + '</button>';

        
        html += '</div>'
        return html;
    },
	
    
    
	renderTable: function(){
	  
        return '<table cellpadding="0" cellspacing="0" class="pika-table">'
        	+ this.renderHead() + this.renderBody() +  '</table>';
        
    },
    
    renderHead: function()
    {
        var i, arr = [];

        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + this.i18n.weekdays[i] + '">' + this.i18n.weekdaysShort[i] + '</abbr></th>');
        }
	
        return '<thead>' + arr.join("") + '</thead>';

    },
    
    
    renderBody: function()
    {
		
		/*
		var today = new Date();
		var weekday = today.getUTCDay();
		alert(weekday);
		*/
		
		
		// hay que crear una fecha de inicio con el valor 
		// algo como fecha interna
		// un inicio de fecha desde el 1/mes-interno/año-interno
		// la fecha del final de mes se puede conseguir con un array
		// pasando parametro por por mes-interno
		
		var dias_mes = this.month_days[5 - 1];
		var dd = 1;
		
		
		
		var rows = "";				
		
		
		for (var j = 0; j < 6; j++) {
			
			rows +="<tr>";		
			// mientras fecha dia interna fin no sea igual a indice entrar en while 
			
				// mientras no terminen los dias del año seguir contruyendo
				for (var i = 0; i < 7; i++) {			
					
					
					if (dd <= dias_mes)
					{
						rows += '<td data-day="1"' 
								+' class=""><button class="pika-button pika-day" '
								+' type="button" ' 
								+' data-pika-year="2015" '
								+' data-pika-month="11" '
								+' data-pika-day="1">'+dd+'</button></td>';	
					}
					else
					{
						rows += "<td class='is-empty'></td>";	
					}
					dd++;
				}	
			rows += "</tr>";
			
		}
		

        return '<tbody>' + rows + '</tbody>';
		
		
    },    
    
    
	
    render: function(year, month){
		
		
		
			var pos = getAbsoluteElementPosition(this.element);
            var caldiv = document.createElement("div");
            caldiv.setAttribute("id", "id-lendar");
            caldiv.setAttribute("class", "pika-single is-bound");

			caldiv.style.position = "absolute";
			
			
			caldiv.style.top = ""+(pos.top + this.element.offsetHeight  ) ;
			//caldiv.style.top = ""+(pos.top) ;
            //caldiv.style.top = ""+(pos.top + ) ;
            
            
			caldiv.style.left = ""+pos.left; 
			//caldiv.style.height = "100px";
			//caldiv.style.width = "100px";
			
            document.body.appendChild(caldiv); 			
			//document.getElementById('idcal').innerHTML = c.i18n.weekdays[1];		
	        //document.getElementById('id-lendar').innerHTML = this.i18n.weekdays[1];		

        

        document.getElementById('id-lendar').innerHTML =
         '<div class="pika-lendar">'+ this.renderTitle(1, 2010) + this.renderTable() +'</div>' ;		


/*
        document.getElementById('id-lendar').innerHTML =
         '<div class="pika-lendar">'+ this.renderTable() +'</div>' ;	    
*/	
	
        
    },
 
	
	
	i18n: {
		previousMonth : 'Previous Month',
		nextMonth     : 'Next Month',
		months        : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		weekdays      : ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
		weekdaysShort : ['Dom','Lun','Mar','Mie','Jue','Vie','Sab']
	},


	month_days: [31,28,31,30,31,30,31,31,30,31,30,31]
	  
/*	

    this.renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' 
			+ renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</thead>';
    };	
	

	this.render = function(year, month)
    {
		
	}
	
*/


	
}





 Calendario.prototype = {	 
	 show: function(){
		 
		 //this.renderTable();
		// alert(this._fecha);
		 	 
		 
		 
	 }
	 
  }
