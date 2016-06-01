/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.system.interaccion;

import com.itx.system.rol.*;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.ORM.Persistencia;


@WebServlet(name = "InteraccionControllerFiltrar",
        urlPatterns = {"/Interaccion/Filtrar.do"})

public class InteraccionControllerFiltrar extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
                           
            
            String paginaDestino = request.getParameter("pag");
            
        
            Interaccion  instancia = new Interaccion();                                    
            Persistencia persistencia = new Persistencia();
                
            
        try {

                Integer intParametro = Integer.parseInt(request.getParameter("id")) ;  
                
                instancia = (Interaccion) persistencia.filtrarId(instancia, intParametro);
                request.getSession().setAttribute("SessionControl", instancia);
                
                
                
                // el redirect se completa con el parametro                 
                response.sendRedirect("../Interaccion/"+paginaDestino);
                
                
        } 
        catch (Exception ex) {
            Logger.getLogger(InteraccionControllerFiltrar.class.getName()).log(Level.SEVERE, null, ex);
        }
        
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
        processRequest(request, response);
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
        processRequest(request, response);
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
