/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.system.interaccion;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.GUI.web.HttpRequest;
import nebuleuse.ORM.Secuencia;

/**
 *
 * @author hugo
 */

@WebServlet(name = "InteraccionControllerListar", 
        urlPatterns = {"/Interaccion/Listar.do"})


public class InteraccionControllerListar extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
                
        
        HttpRequest httpRequest = new HttpRequest();
        Integer pagina = httpRequest.getPage(request);
        String strBuscar = httpRequest.getBuscar(request);

        
        Secuencia<Interaccion> lista = new Secuencia<Interaccion>();         
        List<Interaccion> coleccion = new ArrayList<Interaccion>();       
        
        coleccion = lista.listaPaginacion(new Interaccion(), strBuscar, pagina);                      
            
        request.getSession().setAttribute("SessionLista", coleccion);      
        //request.setAttribute("SessionLista", coleccion);      
                
        request.getSession().setAttribute("SessionPaginaNumeroActual", pagina);      
        request.getSession().setAttribute("SessionPaginaVinculo", "../Interaccion/Listar.do");      
        request.getSession().setAttribute("SessionPaginaCantidadLinea", lista.lineas);    
        request.getSession().setAttribute("SessionPaginaTotalRegistros", lista.TotalRegistros(new Interaccion(), strBuscar));    
                
        response.sendRedirect("../Interaccion/Lista.jspx");  
       
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /** 
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(InteraccionControllerListar.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /** 
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(InteraccionControllerListar.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /** 
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
