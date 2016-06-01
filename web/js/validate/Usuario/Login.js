

window.onload = function() {
            
    var mensaje = AjaxServlet('MensajeAction');    
    alerta_error(mensaje); 
    AjaxServlet('SessionErase.do');    
    

    var cuenta = document.getElementById('cuenta');        
    cuenta.onfocus  = function() {                
            recibirEnfoque('i1');            
    };
    cuenta.onblur  = function() {
            perderEnfoque('i1');
    };
    cuenta.addEventListener('keyup',
        function(event) {                
            if(event.keyCode == 13)
            {                   
                ingresar.click();            
            }            
        },
        false
    );
    
    
    
    var clave = document.getElementById('clave');        
    clave.onfocus  = function() {                
            recibirEnfoque('i2');            
    };
    clave.onblur  = function() {
            perderEnfoque('i2');
    };
    clave.addEventListener('keyup',
        function(event) {                
            if(event.keyCode == 13)
            {                   
                ingresar.click();            
            }            
        },
        false
    );

        
    
    var ingresar = document.getElementById('ingresar');
    ingresar.addEventListener('click',
        function() 
        {
            javascript:document.form_login.submit();  
        }, 
        false
    );  

     
                                        
};



































