
window.onload = function() {


	var date = document.getElementById('date');
	date.addEventListener('focus',
			function() {
				
				Calendario.show('date');
			
				//Calendario.render();
				
                
			}, 
			false
		);
		

	date.addEventListener('blur',
			function() {
/*				
				var erasediv = document.getElementById("idcal");
				document.body.removeChild(erasediv);
*/								
			}, 
			false
		);		

		

		
		
		
		
};