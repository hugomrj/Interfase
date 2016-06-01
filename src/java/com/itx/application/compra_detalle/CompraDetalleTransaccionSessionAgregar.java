/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.application.compra_detalle;

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
import nebuleuse.ORM.Persistencia;



@WebServlet(name = "CompraDetalleTransaccionSessionAgregar",
        urlPatterns = {"/CompraDetalle/Session/Agregar.do"})


public class CompraDetalleTransaccionSessionAgregar extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
      
        
                response.setContentType("text/html;charset=UTF-8");
        
        
            CompraDetalle  instancia = new CompraDetalle();
            Persistencia persistencia = new Persistencia();
            instancia = (CompraDetalle) persistencia.extraerRegistro(request, instancia);          
           
            List<CompraDetalle> coleccion = new ArrayList<CompraDetalle>();      
            
            if (request.getSession().getAttribute("CompraDetalleTransaccionSessionLista") == null  )
            {
                coleccion.add(instancia);
            }
            else
            {
                coleccion = (List<CompraDetalle>) request.getSession().getAttribute("CompraDetalleTransaccionSessionLista");
                coleccion.add(instancia);
            }

            
            // reordenar coleccion para numerar id
            Integer indice = 0;
            for (CompraDetalle detalle : coleccion) {                                
                detalle.setId(indice);                
                indice ++;
            }

        
            
            request.getSession().setAttribute("CompraDetalleTransaccionSessionLista", coleccion);

        
            //response.sendRedirect("../../Compra/Nuevo.jspx");  
       
        
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
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(CompraDetalleTransaccionSessionAgregar.class.getName()).log(Level.SEVERE, null, ex);
        }
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
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(CompraDetalleTransaccionSessionAgregar.class.getName()).log(Level.SEVERE, null, ex);
        }
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
