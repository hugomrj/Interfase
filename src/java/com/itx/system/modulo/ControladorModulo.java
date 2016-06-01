/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.system.modulo;


import java.io.IOException;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "ControladorModulo", 
        urlPatterns = {
            "/Modulo/Listar.do"
        })


public class ControladorModulo extends HttpServlet {
 
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws IOException  {
                
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
        processRequest(request, response);
    } 
 
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    }
 
}