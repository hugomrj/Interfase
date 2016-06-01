<%-- 
    Document   : mensaje
    Created on : 05-sep-2013, 18:08:59
    Author     : hugo
--%>


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
      

        <br/>
        <br/>
        
            <h4>
               
               
            <jsp:scriptlet>  
                       out.println(getServletContext().getRealPath("/index.jsp")); 
            </jsp:scriptlet>
               
               <br/>
               
            <jsp:scriptlet>  
                       out.println(request.getContextPath()+"/Interaccion/Indice.jspx");
            </jsp:scriptlet>


           </h4>
        
        
    </body>
</html>






