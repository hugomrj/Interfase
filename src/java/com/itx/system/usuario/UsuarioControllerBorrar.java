/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.system.usuario;

import java.io.IOException;
import java.util.Enumeration;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.ORM.Persistencia;
import nebuleuse.GUI.web.Mensaje;

/**
 *
 * @author hugom_000
 */

@WebServlet(name = "UsuarioControllerBorrar",
        urlPatterns = {"/Usuario/Borrar.do"})


public class UsuarioControllerBorrar extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        

            System.out.println("INICIO parametros");
            
            Enumeration<String> parametros = request.getParameterNames();
            while(parametros.hasMoreElements())
            {
                String strParametro = parametros.nextElement();
                System.out.println(strParametro);
                System.out.println(request.getParameter(strParametro));
            }

            
        try {            
            
            Mensaje mensaje = new Mensaje();
        
            Usuario usuario = new Usuario();
            Persistencia persistencia = new Persistencia();
            usuario = (Usuario) persistencia.extraerRegistro(request, usuario);    
            
            
            usuario =  (Usuario) persistencia.delete(usuario, request);
            
            
            if (usuario != null)
            {
                mensaje.setEtiqueta("deleteNOT");
                mensaje.setTipo("error");
                
                mensaje.guardarInformacion();
                request.getSession().setAttribute("SessionMensajes", mensaje);
                response.sendRedirect("../Usuario/Borrar.jspx");                
                
            }
            else
            {
                mensaje.setEtiqueta("deleteOK");
                mensaje.setTipo("info");
                
                mensaje.guardarInformacion();
                request.getSession().setAttribute("SessionMensajes", mensaje);
                
                response.sendRedirect("../Usuario/Listar.do");                
                
            }
            
        } catch (Exception ex) {
            Logger.getLogger(UsuarioControllerBorrar.class.getName()).log(Level.SEVERE, null, ex);
        }
               
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
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
     *
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
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
