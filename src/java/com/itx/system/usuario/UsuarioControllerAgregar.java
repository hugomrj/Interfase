/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.system.usuario;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.GUI.web.HttpAction;
import nebuleuse.ORM.Persistencia;
import nebuleuse.GUI.web.Mensaje;

/**
 * @author hugo
 */

@WebServlet(name = "UsuarioControllerAgregar", 
        urlPatterns = {"/Usuario/Agregar.do"})


public class UsuarioControllerAgregar extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
            Usuario instancia = new Usuario();
            Persistencia persistencia = new Persistencia();
                
        try
        {
        
            instancia = (Usuario) persistencia.extraerRegistro(request, instancia);                
            instancia = (Usuario) persistencia.insert(instancia, request);
            
            HttpAction alerta = new HttpAction();            
            alerta.for_Insert(instancia, request, response);
    
            
        } catch (Exception ex) {
            Logger.getLogger(UsuarioControllerAgregar.class.getName()).log(Level.SEVERE, null, ex);
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
