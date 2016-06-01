/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.application.cliente;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.ORM.Persistencia;


@WebServlet(name = "ClienteControllerFiltrar",
        urlPatterns = {"/Cliente/Filtrar.do"})

public class ClienteControllerFiltrar extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
                                       
            String paginaDestino = request.getParameter("pag");
                    
            Cliente  instancia = new Cliente();                                    
            Persistencia persistencia = new Persistencia();
                    
        try {

                Integer intParametro = Integer.parseInt(request.getParameter("id")) ;  
                
                instancia = (Cliente) persistencia.filtrarId(instancia, intParametro);
                request.getSession().setAttribute("SessionControlCliente", instancia);
                               
                // el redirect se completa con el parametro                 
                response.sendRedirect("../Cliente/"+paginaDestino);
                
        } catch (Exception ex) {
            Logger.getLogger(ClienteControllerFiltrar.class.getName()).log(Level.SEVERE, null, ex);
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
