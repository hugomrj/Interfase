/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


package com.itx.system.interaccion;


import com.itx.system.modulo.Modulo;
import com.itx.system.usuario.Usuario;
import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.ORM.Persistencia;


@WebServlet(name = "InteraccionController", 
        urlPatterns = {
            "/Interaccion/Mostrar.do",
            "/Interaccion/Buscar.do"
        })


public class InteraccionController extends HttpServlet {
 
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) 
            throws IOException, Exception  {

                
        if (request.getHeader("referer") == null)
        {
            response.sendRedirect("../login.jspx");    
        }
        
         
        if (request.getSession().getAttribute("SessionUsuario") == null)
        {        
            response.sendRedirect("../login.jspx");  
         }
       
        //SessionComponenteIndice
        request.getSession().setAttribute("SessionInteracciones", null);
        request.getSession().setAttribute("SessionInteraccionIndice", null);
        
        
        Usuario usuario = new Usuario();
        InteraccionAction controlAccion = new InteraccionAction();

        
        
        if (request.getRequestURI().equals( request.getContextPath()+"/Interaccion/Mostrar.do") ) 
        {                 
            Persistencia persistencia = new Persistencia();

            usuario = (Usuario) request.getSession().getAttribute("SessionUsuario");

            Integer intModulo = 0;         
            intModulo = Integer.parseInt(request.getParameter("modulo"));         
            Modulo modulo = new Modulo();
            modulo = (Modulo) persistencia.filtrarId(modulo, intModulo);         

                        
            List<Interaccion> interacciones = controlAccion.mostrar(usuario, modulo);

            request.getSession().setAttribute("SessionInteracciones", interacciones);            
            response.sendRedirect("../Interaccion/Mostrar.jspx"); 
        }
                
        else if (request.getRequestURI().equals( request.getContextPath()+"/Interaccion/Buscar.do") ) 
        {

            usuario = (Usuario) request.getSession().getAttribute("SessionUsuario");

            String StrBuscar = "";
            StrBuscar = request.getParameter("buscar");         
  
            List<Interaccion> componentes = controlAccion.buscar(usuario, StrBuscar);

            request.getSession().setAttribute("SessionInteraccionIndice", componentes);            
            response.sendRedirect("../Interaccion/Indice.jspx"); 
            
        }
               
        
       /*         
        if (request.getHeader("referer") == null)
        {
            response.sendRedirect("../login.jspx");    
        }
        else
        {        
            if (request.getRequestURI().equals( request.getContextPath()+"/Modulo/Listar.do") ) 
            {                                           
                ModuloListar control = new ModuloListar();
                control.ejecutar(request, response);                   
            }       
        }           
        */    
            
        
    }
 
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(InteraccionController.class.getName()).log(Level.SEVERE, null, ex);
        }
    } 
 
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(InteraccionController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
 
}